// 'use client'
import Image from 'next/image'
import React from 'react'

const AddComment = () => {
  return (
    <div className='flex gap-4 items-center'>
                <Image src='/image1.jpeg' className='rounded-full' width={32} height={32} alt='avatar' />
                <div className='bg-gray-300 px-4 py-1.5 rounded-lg flex items-center flex-1'>
                    <input type="text" name="" id="" placeholder='Write a comment...'
                        className='outline-none bg-transparent flex-1'
                    />
                    <Image src='/images/emoji.png' width={16} height={16} alt='Emoji' />
                </div>
            </div>
  )
}

export default AddComment
