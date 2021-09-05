const Logo = () => {
    return (
        <div className='relative group cursor-pointer'>
            <div className='flex'>
                <h1 className='transition-all duration-500 text-5xl font-bold transform group-hover:translate-x-4'>m</h1>
                <h1 className='transition-all duration-500 text-5xl font-bold transform group-hover:translate-x-4 text-opacity-0 group-hover:text-opacity-100'>arius</h1>
            </div>
            <div className='transition-all duration-300 absolute top-0 w-4 h-2 bg-purple-400 group-hover:w-24'/>
            <div className='transition-all duration-300 absolute inset-y-0 left-0 w-0 h-0 bg-purple-600 group-hover:w-2 group-hover:h-full'/>
            <div className='transition-all duration-300 absolute inset-x-0 left-0 w-0 h-0 bg-purple-800 group-hover:w-12 group-hover:h-2'/>
        </div>
    )
}

export default Logo