'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='flex gap-[4px] flex-col' onClick={() => setIsOpen(prev => !prev)}>
                <span className={`w-6 h-1 rounded-xl bg-blue-600 block duration-200 origin-left ${isOpen && "rotate-45"}`}></span>
                <span className={`w-6 h-1 rounded-xl bg-blue-600 block ${isOpen && "invisible"}`}></span>
                <span className={`w-6 h-1 rounded-xl bg-blue-600 block duration-200 origin-left ${isOpen && "-rotate-45"}`}></span>
            </div>
            {isOpen &&
                <aside className='h-[calc(100vh-96px)] w-full flex flex-col justify-center items-center gap-4 text-lg font-semibold bg-white absolute top-24 left-0'>
                    <Link href=''>HomePage</Link>
                    <Link href=''>Freinds</Link>
                    <Link href=''>Stories</Link>
                    <Link href=''>Profile</Link>
                </aside>
            }
        </>
    )
}

export default MobileMenu
