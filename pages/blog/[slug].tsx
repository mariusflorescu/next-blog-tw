import React from 'react'
import {useRouter} from 'next/router'
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote'
import {FrontMatter} from "../../types";
import {getPosts, getPostBySlug} from "../../lib/mdx";
import Meta from "../../components/Meta";
import Tooltip from "../../components/Tooltip";

interface IBlog {
    mdxSource: MDXRemoteSerializeResult,
    frontMatter: FrontMatter
}

interface IParams {
    params: { slug: string }
}

const Blog : React.FC<IBlog> = ({mdxSource, frontMatter}) => {
    const router = useRouter()
    return (
        <>
            <Meta title={frontMatter.title} description={frontMatter.description}/>
            <Tooltip side='top' text='go back'>
                <span className='text-lg font-semibold my-2 cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800' onClick={(e) => router.push('/blog')}>
                    &larr;
                </span>
            </Tooltip>
            <div className='w-full flex justify-between items-center py-4'>
                <h1 className='text-4xl font-semibold'>{frontMatter.title}</h1>
                <small className='text-gray-500 dark:text-gray-500'>{frontMatter.readingTime.text}</small>
            </div>
            <div className='border-b border-gray-100 dark:border-gray-800 my-2'/>
            <div className='pt-2 pb-6'>
                <MDXRemote {...mdxSource}/>
            </div>
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

export const getStaticProps = async ({params} : IParams) => {
    const post = await getPostBySlug(params.slug)

    return { props: post }
}

export default Blog