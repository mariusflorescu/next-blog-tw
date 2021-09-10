import React from 'react'
import Link from 'next/link'

//headings
const h1MDX = (props:any) => <h1 className='text-5xl font-bold py-2' {...props}/>
const h2MDX = (props:any) => <h1 className='text-4xl font-bold py-2' {...props}/>
const h3MDX = (props:any) => <h1 className='text-3xl font-semibold py-2' {...props}/>
const h4MDX = (props:any) => <h1 className='text-2xl font-semibold py-2' {...props}/>
const h5MDX = (props:any) => <h1 className='text-xl font-semibold py-2' {...props}/>
const h6MDX = (props:any) => <h1 className='text-lg font-semibold py-2' {...props}/>

//link
const linkMDX = (props:any) => {
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

    if(isInternalLink){
        return (
            <Link href={href} passHref>
                <a className='cursor-pointer hover:text-gray-700 dark:hover-text-gray-300' {...props}/>
            </Link>
        )
    }

    return <a href={href} className='cursor-pointer hover:text-gray-700 dark:hover:text-gray-300' {...props}/>
}

//code
const inlineCodeMDX = (props:any) => <code className='p-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm' {...props}/>

//quote
const quoteMDX = (props:any) => <blockquote className='my-2 py-3 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg italic tracking-widest' {...props}/>

//lists
const ulMDX = (props:any) => <ul className='list-disc' {...props}/>
const olMDX = (props:any) => <ol className='list-decimal' {...props}/>
const liMDX = (props:any) => <li className='pb-1' {...props}/>

//utils
const brMDX = (props:any) => <div className='h-2' {...props}/>
const hrMDX = (props:any) => <div className='border-b border-gray-100 dark:border-gray-800 my-2' {...props}/>

const MDXComponents = {
    //headings
    h1: h1MDX,
    h2: h2MDX,
    h3: h3MDX,
    h4: h4MDX,
    h5: h5MDX,
    h6: h6MDX,

    //link
    a: linkMDX,

    //code
    inlineCode: inlineCodeMDX,

    //quote
    blockquote: quoteMDX,

    //lists
    ul: ulMDX,
    ol: olMDX,
    li: liMDX,

    //utils
    br: brMDX,
    hr: hrMDX
}

export default MDXComponents