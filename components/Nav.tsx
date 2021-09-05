import Logo from './Logo'

const Nav = () => {
    return (
        <div className='w-full flex justify-between items-center py-8'>
            <Logo/>

            <span>Command</span>
        </div>
    )
}

export default Nav