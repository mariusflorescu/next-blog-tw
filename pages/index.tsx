import type { NextPage } from 'next'
import { useTheme } from 'next-themes'

const Home: NextPage = () => {
  const {theme, setTheme} = useTheme();
  return (
    <div className='bg-green-500'>
      Hello
      <button
          className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
      >
        Change Theme
      </button>
    </div>
  )
}

export default Home
