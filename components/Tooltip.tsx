import React  from 'react'
import {useTheme} from "next-themes";
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

interface ITooltip {
    side:
        | "top"
        | "bottom"
        | "left"
        | "right"
    text: string
}

const Tooltip : React.FC<ITooltip> = ({children,side ,text}) => {
    const {theme} = useTheme()

    return (
        <TooltipPrimitive.Root delayDuration={300}>
            <TooltipPrimitive.Trigger asChild>
                {children}
            </TooltipPrimitive.Trigger>
            <TooltipPrimitive.Content side={side} align="center" sideOffset={5} className='bg-gray-100 dark:bg-gray-800 p-2 rounded'>
                {text}
                <TooltipPrimitive.Arrow fill={theme === 'light' ? '#F5F5F5' : '#262626'}/>
            </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>
    )
}

export default Tooltip