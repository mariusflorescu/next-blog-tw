import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes"
import '../styles/globals.css'
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider forcedTheme={undefined} attribute="class">
        <div className='container mx-auto px-2'>
            <Nav/>
            <Component {...pageProps} />
        </div>
      </ThemeProvider>
  )
}
export default MyApp
