import Image from 'next/image'
import React from 'react'

const Comment = () => {
    return (
        <div className='flex flex-col gap-4'>            
            <div className='flex items-start gap-4 my-4'>
                <Image className='rounded-full' src='/image1.jpeg' width={32} height={32} alt='Avatar' />
                <div className='flex flex-col gap-2'>
                    <p className='font-bold'>Ali Khatami</p>
                    <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur
                        voluptate obcaecati ab officiis eaque
                        inventore dolorum placeat aliquam non tenetur veniam illo molestiae hic quaerat
                        eos, itaque soluta vitae.</p>
                        <div className='text-sm flex items-center gap-4 text-gray-500'>
                            <Image className='cursor-pointer' src='/images/like.png' width={16} height={16} alt='like' />
                            <span>|</span>
                            <p>
                                123
                                <span className='hidden sm:inline'> Likes</span>
                            </p>
                            <span className='cursor-pointer'>Reply</span>
                        </div>
                </div>
                <Image src='/images/more.png' width={16} height={16} alt='more' className='cursor-pointer' />
            </div>
        </div>
    )
}

export default Comment
