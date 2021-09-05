import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body className="bg-white dark:bg-gray-900 text-white dark:text-black transition-all">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument