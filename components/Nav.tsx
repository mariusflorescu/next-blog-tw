import Logo from './Logo'
import CommandMenu from "./CommandMenu";

const Nav = () => {
    return (
        <div className='w-full flex justify-between items-center py-8'>
            <Logo/>
            <CommandMenu/>
        </div>
    )
}

export default Nav