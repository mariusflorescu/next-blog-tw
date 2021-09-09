import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import {Post} from '../types'
import Meta from "../components/Meta";
import {getAllFilesFrontMatter} from "../lib/mdx";
import PostCardDetails from "../components/PostCardDetails";

interface IBlog {
    posts: Post[]
}

const Blog : React.FC<IBlog> = ({posts}) => {
    return (
        <>
            <Meta title='Blog | Marius Florescu' description='My blog...'/>
            <div className='space-y-5'>
                {React.Children.toArray(posts.map((post:Post) => (
                    // eslint-disable-next-line react/jsx-key
                    <PostCardDetails post={post}/>
                )))}
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const posts = getAllFilesFrontMatter()

    return {props: {posts}}
}

export default Blog