import type { NextPage } from 'next'
import { useTheme } from 'next-themes'

const Home: NextPage = () => {
  const {theme, setTheme} = useTheme();
  return (
    <div>
      <button
          className="m-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
      >
        Change Theme
      </button>

        <h2 className='text-3xl font-semibold'>Hi there 👋🏼, I&apos;m Marius</h2>
        <p className='font-medium flex items-center py-2'>
            Definitely not a
            <span className='animate-bounce px-2 bg-clip-text text-transparent dark:text-transparent bg-gradient-to-r from-purple-500 dark:from-purple-400 via-pink-500 to-red-600'>fullstack developer</span>
            and
            <span className='animate-bounce px-2 bg-clip-text text-transparent dark:text-transparent bg-gradient-to-r from-green-600 dark:from-green-500 to-blue-500'>student</span>
            .
        </p>
    </div>
  )
}

export default Home
