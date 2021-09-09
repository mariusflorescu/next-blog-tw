import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
// @ts-ignore
import mdxPrism from 'mdx-prism'
import readingTime from 'reading-time'

import RAH from 'remark-autolink-headings'
import RS from 'remark-slug'
// @ts-ignore
import RCT from 'remark-code-titles'

const root = process.cwd()

export const getPosts = () => {
    return fs.readdirSync(path.join(root,'posts'))
}

export const getAllFilesFrontMatter = () => {
    const files = getPosts();

    return files.reduce((allPosts:unknown[], postSlug:string) => {
        const source = fs.readFileSync(path.join(root, 'posts', postSlug), 'utf8')
        const {data} = matter(source)

        return [
            {
                ...data,
                slug: postSlug.replace('.mdx', '')
            },
            ...allPosts
        ]
    }, [])
}

export const getPostBySlug = async (slug: string) => {
    const source = fs.readFileSync(path.join(root, 'posts', `${slug}.mdx`), 'utf8')

    const { data, content } = matter(source)
    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [
                RAH,
                RS,
                RCT,
            ],
            rehypePlugins: [mdxPrism]
        }
    })

    return {
        mdxSource,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readingTime: readingTime(content),
            slug: slug || null,
            ...data
        }
    }
}