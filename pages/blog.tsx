import type { NextPage } from 'next'
import React, {useState} from 'react'
import Meta from "../components/Meta";
import {getAllFilesFrontMatter} from "../lib/mdx";

const Blog : React.FC<{posts: any}> = ({posts}) => {
    return (
        <>
            <Meta title='Blog' description='My blog...'/>
            {React.Children.toArray(posts.map((post:any) => (
                <span className='text-green-500 dark:text-green-500'>{post.title} {post.description} {post.tag}</span>
            )))}
        </>
    )
}

export const getStaticProps = async () => {
    const posts = await getAllFilesFrontMatter()

    return {props: {posts}}
}

export default Blog