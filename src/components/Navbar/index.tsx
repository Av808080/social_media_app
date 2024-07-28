import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
    return (
        <div className='bg-white shadow-lg shadow-slate-200 h-24 px-4 2xl:64 xl:px-32 lg:px-16 md:px-8 flex justify-between items-center'>
            {/* Logo */}
            <div className='uppercase block sm:hidden md:block text-blue-600 font-extrabold text-lg'>SocialMedia</div>
            {/* Links */}
            <div className='hidden sm:flex justify-between gap-4'>

                <Link href='' className='flex justify-between gap-1.5 items-center'>
                    <Image src='/images/home.png' width={16} height={16} alt='' />
                    HomePage
                </Link>
                <Link href='' className='flex justify-between gap-1.5 items-center'>
                    <Image src='/images/friends.png' width={16} height={16} alt='' />
                    Friends
                </Link>
                <Link href='/' className='flex justify-between gap-1.5 items-center'>
                    <Image src='/images/stories.png' width={16} height={16} alt='' />
                    Stories
                </Link>
            </div>
            {/* Serch Input */}
            <div className='bg-slate-300 rounded-md hidden lg:flex justify-between items-center px-2'>
                <input type="search" className='bg-transparent h-8 w-40 outline-none' placeholder='Search...' />
                <Image src='/images/search.png' width={16} height={16} alt='search' />
            </div>
            {/* Avatar */}
            <div className='hidden sm:flex gap-4'>
                <Image src='/images/friends.png' width={20} height={20} alt='freinds' />
                <Image src='/images/messages.png' width={20} height={20} alt='messages' />
                <Image src='/images/notifications.png' width={20} height={20} alt='notifications' />
                <Image src='/images/noAvatar.png' width={20} height={20} alt='avatar' />
                {false && <>
                    <span>Login/Register</span>
                    <span></span>
                </>
                }
            </div>
            {/* Hamburger Menu */}
            <div className='block sm:hidden'>
                <MobileMenu />
            </div>
        </div>
    )
}

export default Navbar
