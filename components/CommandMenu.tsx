import React, {Fragment, useState, useEffect, useMemo} from 'react'
import {useRouter} from "next/router";
import {Dialog, Transition} from '@headlessui/react'
import {useTheme} from "next-themes";
import tinykeys from 'tinykeys'

const Category : React.FC<{name: string}> = ({name}) => {
    return (
        <div className='font-medium py-1 px-6 bg-gray-100 dark:bg-gray-700'>
            {name}
        </div>
    )
}

const CommandMenu = () => {
    const router = useRouter();
    const {theme, setTheme} = useTheme();

    const [open, setOpen] = useState(false)

    function closeModal() {
        setOpen(false)
    }

    function openModal() {
        setOpen(true)
    }

    const keymaps = useMemo(() => {
        return {
            //switch theme
            't': () => setTheme(theme === 'light' ? 'dark' : 'light'),
            //local nav
            'g h': () => router.push('/'),
            'g b': () => router.push('/blog')
        }
    },[setTheme,theme,router])

    useEffect(() => {
        const subs = [
            tinykeys(window, keymaps),
            tinykeys(window,{
                '$mod+k': () => setOpen((prev) => !prev)
            })
        ]

        return () => {
            subs.forEach(sub => sub())
        }
    })

    return (
        <>
            <button
                type="button"
                onClick={openModal}
                className="font-bold text-3xl p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 outline-none"
            >
                ⌘
            </button>

            <Transition appear show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black/10"/>
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
              &#8203;
            </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl dark:bg-gray-800">
                                <Dialog.Title className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 text-lg font-semibold">
                                    Command menu
                                </Dialog.Title>

                                <Category name='theme'/>
                                <div
                                    onClick={() => {
                                        closeModal()
                                        setTimeout(() => {
                                            setTheme(theme === 'light' ? 'dark' : 'light')
                                        },300)
                                    }}
                                    className='flex items-center justify-between transition-all cursor-pointer py-2 px-12 hover:bg-gray-100 dark:hover:bg-gray-900 group'>
                                    <span>
                                        switch theme
                                    </span>
                                    <span className='py-1 px-2 font-mono rounded bg-gray-100 dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-gray-800'>
                                        T
                                    </span>
                                </div>

                                <Category name='navigation'/>
                                <div
                                    className='flex items-center justify-between transition-all cursor-pointer py-2 px-12 hover:bg-gray-50 dark:hover:bg-gray-900 group'>
                                    <span>home</span>
                                    <span className='py-1 px-2 font-mono rounded bg-gray-100 dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-gray-800'>
                                        G+H
                                    </span>
                                </div>
                                <div
                                    className='flex items-center justify-between transition-all cursor-pointer py-2 px-12 hover:bg-gray-100 dark:hover:bg-gray-900 group border-t border-transparent hover:border-white dark:hover:border-gray-800'>
                                    <span>blog</span>
                                    <span className='py-1 px-2 font-mono rounded bg-gray-100 dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-gray-800'>
                                        G+B
                                    </span>
                                </div>

                                </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CommandMenu