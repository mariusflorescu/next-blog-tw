import React from 'react'
import {NextSeo} from 'next-seo'
import Head from 'next/head'

type MetaProps = {
    title:string,
    description:string,
}

const Meta : React.FC<MetaProps> = ({title, description}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="UTF-8" key="charset" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                    key="viewport"
                />
            </Head>
            <NextSeo
                title={title}
                description={description}
                openGraph={{
                    title,
                    description
                }}
            />
        </>
    )
}

export default Meta