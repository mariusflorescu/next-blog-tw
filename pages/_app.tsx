import type { AppProps } from 'next/app'
import {MDXProvider} from '@mdx-js/react'
import { ThemeProvider } from "next-themes"
import '../styles/globals.css'
import Nav from "../components/Nav";

const components = {
    code: (props: any) => <pre className='bg-yellow-300 dark:bg-yellow-300' {...props}/>
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider forcedTheme={undefined} attribute="class">
        <MDXProvider components={components}>
            <div className='container mx-auto px-2'>
                <Nav/>
                <Component {...pageProps} />
            </div>
        </MDXProvider>
      </ThemeProvider>
  )
}
export default MyApp
