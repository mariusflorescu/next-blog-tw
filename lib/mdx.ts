import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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