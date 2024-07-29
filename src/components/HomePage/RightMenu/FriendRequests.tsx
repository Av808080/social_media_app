import Image from 'next/image'
import React from 'react'

const FriendRequests = () => {
  return (
    <section className='flex flex-col p-4 gap-4 rounded-md bg-white shadow-md shadow-slate-400'>
        <div className='flex justify-between'>
            <h3 className='text-gray-500 font-bold'>Friend Requests</h3>
            <p className='text-blue-500 font-bold'>See all</p>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
            <Image src='/image1.jpeg' width={32} height={32} className='rounded-full' alt='avatar' />
            <span className='font-bold'>Ali Khatami</span>
            </div>
            <div className='flex gap-2 items-center'>
                <Image src='/images/accept.png' className='rounded-full cursor-pointer' width={16} height={16} alt='accept' />
                <Image src='/images/reject.png' className='rounded-full cursor-pointer' width={16} height={16} alt='reject' />
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
            <Image src='/image1.jpeg' width={32} height={32} className='rounded-full' alt='avatar' />
            <span className='font-bold'>Ali Khatami</span>
            </div>
            <div className='flex gap-2 items-center'>
                <Image src='/images/accept.png' className='rounded-full cursor-pointer' width={16} height={16} alt='accept' />
                <Image src='/images/reject.png' className='rounded-full cursor-pointer' width={16} height={16} alt='reject' />
            </div>
        </div>
    </section>
  )
}

export default FriendRequests
