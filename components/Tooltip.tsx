import React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

interface ITooltip {
    text: string
}

const Tooltip : React.FC<ITooltip> = ({children,text}) => {
    return (
        <TooltipPrimitive.Root delayDuration={300}>
            <TooltipPrimitive.Trigger asChild>
                {children}
            </TooltipPrimitive.Trigger>
            <TooltipPrimitive.Content side="top" align="center" sideOffset={5} className='transition-all bg-gray-100 dark:bg-gray-800 p-2 rounded'>
                {text}
                <TooltipPrimitive.Arrow className='fill-current text-gray-100 dark:text-gray-800'/>
            </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>
    )
}

export default Tooltip