import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from "next-themes"
import '../styles/globals.css'
import '../styles/prism.css'
import Nav from "../components/Nav";
import MDXComponents from "../components/MDXComponents";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider forcedTheme={undefined} attribute="class">
        <MDXProvider components={MDXComponents}>
            <div className='container mx-auto px-2 overflow-x-hidden'>
                <Nav/>
                <Component {...pageProps} />
            </div>
        </MDXProvider>
      </ThemeProvider>
  )
}
export default MyApp
