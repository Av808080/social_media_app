import Image from 'next/image'
import React from 'react'
import Post from './Post'
import Profile from '@/components/shared/Profile'

const Main = () => {
    return (
        <div className='w-full lg:w-[70%] xl:w-[50%] flex flex-col gap-8'>
            <Profile />
            {/* Stories */}
            <div className='rounded-lg bg-white shadow-md shadow-slate-400 min-h-20 flex gap-6 overflow-x-scroll p-4'>
                <div className='relative w-20 h-18'>
                    <p className='absolute bottom-[30px] right-5 font-bold z-10 text-4xl'>+</p>
                    <Image className='rounded-full w-20 h-18 opacity-70' src='/image1.jpeg' alt='' width={100} height={100} />
                    <p className='font-semibold text-sm truncate w-16 text-center'>Ronaldosvsvs</p>
                </div>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item => <div key={item}>
                    <Image className='rounded-full w-20 h-18 ring bg-slate-600' src='/image1.jpeg' alt='' width={100} height={100} />
                    <p className="font-semibold text-sm truncate w-16 text-center">Ronaldo</p>
                </div>))}
            </div>
            {/* Add Post */}
            <div className='flex gap-4 rounded-md bg-white p-4 shadow-md shadow-slate-400 max-[410px]:flex-col max-[410px]:items-center'>
                {/* Avatar */}
                <div>
                    <Image className='rounded-full ring bg-slate-600' src='/image1.jpeg' alt='' width={40} height={40} />
                </div>
                {/* Form */}
                <form action={''} className='flex gap-4 flex-1 items-center max-[410px]:flex-col '>
                    <div className='flex flex-1 flex-col gap-2'>
                        <textarea name="postContent" placeholder="What's on your mind?" className='resize-none bg-slate-200 px-2 py-1 rounded-sm focus:outline-none' />
                        <div className='flex gap-4 flex-wrap justify-center'>
                            <div className='flex gap-1 items-center '>
                                <Image src='/images/addimage.png' width={16} height={16} alt='Add Image' />
                                Photo
                            </div>
                            <div className='flex gap-1 items-center'>
                                <Image src='/images/addvideo.png' width={16} height={16} alt='Add Video' />
                                Video
                            </div>
                            <div className='flex gap-1 items-center'>
                                <Image src='/images/poll.png' width={16} height={16} alt='Poll' />
                                Poll
                            </div>
                            <div className='flex gap-1 items-center'>
                                <Image src='/images/addevent.png' width={16} height={16} alt='Add Event' />
                                Event
                            </div>
                        </div>
                    </div>
                    <button className='bg-blue-600 hover:bg-blue-500 duration-200 text-white rounded-lg px-4 py-1 max-[410px]:w-full'>Send</button>
                </form>
            </div>
            {/* Posts */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Main
