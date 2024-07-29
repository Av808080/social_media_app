import Image from 'next/image'
import React from 'react'

const ProfileView = () => {
    return (
        <section className='flex flex-col items-center gap-2 bg-white p-4 rounded-md shadow-md shadow-slate-400' >
            <div className='relative'>
            <Image className='h-16 object-cover rounded-md' src='/image1.jpeg' width={300} height={16} alt='cover image' />
            <Image className='absolute -bottom-4 left-0 right-0 m-auto z-20 rounded-full ring ring-slate-100'
                src='/image1.jpeg' width={36} height={36} alt='Avatar' />
            </div>
            <h3 className='font-black mt-3'>Ali Khatami</h3>
            <div className='flex justify-center items-center gap-6 my-1'>
                <div className='flex gap-0.5'>

                    <Image className='rounded-full' src='/image1.jpeg' width={16} height={16} alt='' />
                    <Image className='rounded-full' src='/image1.jpeg' width={16} height={16} alt='' />
                    <Image className='rounded-full' src='/image1.jpeg' width={16} height={16} alt='' />
                </div>
                <p className='text-gray-500 text-xs font-bold'>142 Followers</p>
            </div>
            <button className='bg-blue-600 text-white rounded-md px-3 py-1 text-sm hover:bg-blue-500 duration-200'>My Profile</button>
        </section>
    )
}

export default ProfileView
