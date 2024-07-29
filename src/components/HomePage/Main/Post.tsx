import React from 'react'
import Image from 'next/image'
import Comment from './Comment'
import AddComment from './AddComment'

const Post = () => {
    return (
        <section className='bg-white shadow-md shadow-slate-400 rounded-md p-4 flex flex-col gap-4'>
            {/* Avatar */}
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <Image className='rounded-full w-8 h-8' src='/image1.jpeg' alt='' width={32} height={32} />
                    <span className='font-bold'>Ali Khatami</span>
                </div>
                <Image src='/images/more.png' width={16} height={16} alt='more' className='cursor-pointer' />
            </div>
            {/* Description */}
            <Image src='/image1.jpeg' width={1000} height={1000} alt='' className='w-full rounded-lg' />
            <p className='font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                deserunt corporis quasi blanditiis ex qui odio, optio porro iure
                recusandae deleniti facilis officiis. Velit accusantium voluptatem
                adipisci eaque cum veniam.
            </p>
            {/* Interaction */}
            <div className='my-4 flex justify-between gap-4'>
                <div className='flex gap-2 px-4 py-1 items-center bg-gray-200 rounded-xl cursor-pointer'>
                    <Image src='/images/like.png' width={16} height={16} alt='like' />
                    <span>|</span>
                    <p className='text-gray-600 text-sm'> 123 <span className='hidden sm:inline'>Likes </span></p>
                </div>
                <div className='flex gap-2 px-4 py-1 items-center bg-gray-200 rounded-xl cursor-pointer'>
                    <Image src='/images/comment.png' width={16} height={16} alt='comment' />
                    <span>|</span>
                    <p className='text-gray-600 text-sm'> 123 <span className='hidden sm:inline'> Comments </span></p>
                </div>
                <div className='flex gap-2 px-4 py-1 items-center bg-gray-200 rounded-xl cursor-pointer'>
                    <Image src='/images/share.png' width={16} height={16} alt='share' />
                    <span>|</span>
                    <p className='text-gray-600 text-sm'> 123 <span className='hidden sm:inline'>Share </span></p>
                </div>
            </div>

            {/* Comment */}
            <AddComment />
            <Comment />
            <Comment />
        </section>
    )
}

export default Post
