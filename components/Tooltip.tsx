import React from 'react'
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
    return (
        <TooltipPrimitive.Root delayDuration={300}>
            <TooltipPrimitive.Trigger asChild>
                {children}
            </TooltipPrimitive.Trigger>
            <TooltipPrimitive.Content side={side} align="center" sideOffset={4} className='bg-gray-100 dark:bg-gray-800 p-2 rounded'>
                {text}
                <TooltipPrimitive.Arrow className='fill-current text-gray-100 dark:text-gray-800'/>
            </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>
    )
}

export default Tooltip