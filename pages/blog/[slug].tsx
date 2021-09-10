import React from 'react'
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote'
import {FrontMatter} from "../../types";
import {getPosts, getPostBySlug} from "../../lib/mdx";
import Meta from "../../components/Meta";

interface IBlog {
    mdxSource: MDXRemoteSerializeResult,
    frontMatter: FrontMatter
}

const Blog : React.FC<IBlog> = ({mdxSource, frontMatter}) => {
    return (
        <>
            <Meta title={frontMatter.title} description={frontMatter.description}/>
            <MDXRemote {...mdxSource}/>
        </>
    )
}

export const getStaticPaths = () => {
    const posts = getPosts();

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, '')
            }
        })),
        fallback: false
    }
}

export const getStaticProps = async ({params} : any) => {
    const post = await getPostBySlug(params.slug)

    return { props: post }
}

export default Blog