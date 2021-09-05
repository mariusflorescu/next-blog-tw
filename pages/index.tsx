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

        <h2 className='text-5xl font-semibold'>marius</h2>
        <h4 className='text-2xl font-medium bg-clip-text text-transparent dark:text-transparent bg-gradient-to-r from-yellow-500 dark:from-yellow-400 via-purple-500 to-blue-700'>learning by building.</h4>

        <div className='my-6 h-0 w-full border-b border-gray-300 dark:border-gray-700'/>

        <div className='flex items-center flex-wrap font-medium text-lg flex items-center'>
            <p>definitely not a</p>&nbsp;
            <span className='animate-bounce bg-clip-text text-transparent dark:text-transparent bg-gradient-to-r from-purple-500 dark:from-purple-400 via-pink-500 to-red-600'>fullstack developer</span>&nbsp;
            <p>and</p>&nbsp;
            <span className='animate-bounce bg-clip-text text-transparent dark:text-transparent bg-gradient-to-r from-green-600 dark:from-green-500 to-blue-500'>student</span>
        </div>
        <p className='py-1'>
            young, driven by my passion and love for technology
        </p>
        <p>
            ambitious with a tendency to perfectionism
        </p>
        <p>
            positive mindset accompanied by a can-do attitude
        </p>

        <h6 className='font-medium pt-12 text-gray-700 dark:text-gray-400'>fullstack dev @ victory square partners.</h6>
    </div>
  )
}

export default Home
