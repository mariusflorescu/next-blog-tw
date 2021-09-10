import React from 'react'
import Link from 'next/link'
import { Post } from '../types'

interface IPostCardDetails {
    post: Post
}

const PostCardDetails : React.FC<IPostCardDetails> = ({post}) => {
    return (
        <Link href={`/blog/${post.slug}`} passHref>
            <div className='group transition-all transform flex space-x-6 cursor-pointer hover:scale-[101%]'>
                <h5 className='text-sm font-semibold py-2 text-gray-400 dark:text-gray-500'>{post.publishedAt}</h5>
                <div>
                    <h3 className='transition-colors font-semibold text-gray-800 dark:text-gray-200 text-2xl group-hover:text-gray-400 dark:group-hover:text-gray-500'>{post.title}</h3>
                    <small className='font-xs'>in {post.tag}</small>
                    <p className='py-2 text-gray-700 dark:text-gray-300'>{post.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default PostCardDetails