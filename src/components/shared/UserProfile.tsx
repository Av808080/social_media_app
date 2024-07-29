import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserProfile = () => {
    return (
        <div className='flex flex-col gap-4 text-gray-500 text-sm font-bold bg-white p-4 rounded-md shadow-md shadow-slate-400'>
            <h3 className='text-xl text-gray-600'>User Information</h3>
            <div className='flex gap-2 items-center'>
                <h4 className='text-lg font-extrabold text-black'>Christine Simon</h4>
                <span>@c_simon</span>
            </div>
            <div>The best and most beutiful thing in the world can not be seen or even tounched</div>
            <div className='flex items-center gap-4'>
                <Image src='/images/map.png' width={16} height={16} alt='map Icon' />
                <p>Living in <span className='font-extrabold text-gray-700'>Germany, Berlin</span></p>
            </div>
            <div className='flex items-center gap-4'>
                <Image src='/images/school.png' width={16} height={16} alt='school Icon' />
                <p>Went to <span className='font-extrabold text-gray-700'>The Univercity of Berlin</span></p>
            </div>
            <div className='flex items-center gap-4'>
                <Image src='/images/work.png' width={16} height={16} alt='work Icon' />
                <p>Works at <span className='font-extrabold text-gray-700'>Aston Company</span></p>
            </div>
            <div className='flex justify-between'>
                <Link href='' className='flex gap-4 items-center text-blue-500'>
                    <Image src='/images/link.png' width={16} height={16} alt='link Icon' />
                    imsimon.com
                </Link>
            </div>
            <div className='flex gap-4 items-center'>
                <Image src='/images/date.png' width={16} height={16} alt='date Icon' />
                <p>
                    joined June 17, 2024
                </p>

            </div>
            <button className='w-full rounded-md bg-blue-600 hover:bg-blue-500 duration-200 py-2 font-normal tracking-wide text-white'>Following</button>
            <button className='text-rose-500 hover:bg-red-600 hover:font-normal hover:text-white duration-200 rounded-md py-2 border tracking-wide border-red-600 '>Block User</button>

        </div>
    )
}

export default UserProfile
