import Meta from "../../components/Meta";
import { MDXRemote } from 'next-mdx-remote'
import {getPosts, getPostBySlug} from "../../lib/mdx";

const Blog = ({mdxSource, frontMatter} : any) => {
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