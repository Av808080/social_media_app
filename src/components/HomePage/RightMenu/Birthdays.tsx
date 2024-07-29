import Image from 'next/image'
import React from 'react'

const Birthdays = () => {
  return (
    <section className='bg-white shadow-md shadow-slate-400 rounded-md p-4 flex flex-col gap-4'>
        <h3 className='font-bold text-gray-500'>Birthdays</h3>
        <div className='flex justify-between items-center gap-4'>
            <div className='flex gap-3 items-center'>
            <Image src='/image1.jpeg' width={32} height={32} className='rounded-full' alt='avatar' />
            <span className='font-bold'>Ali Khatami</span>
            </div>
            <button className='bg-blue-600 hover:bg-blue-500 duration-200 px-3 text-sm py-1 rounded-md text-white'>Celebrate</button>
        </div>
        <div className='flex items-center gap-4 px-4 py-2 rounded-lg bg-gray-300'>
            <Image src='/images/gift.png' width={32} height={32} alt='gift' />
            <div className='text-sm'>
                <h4 className='font-bold text-gray-700 text-sm'>
                    Upcomming Birthdays
                </h4>
                <p className='text-gray-500 text-xs'>
                    See other 8 have upcomming birthdays
                </p>
            </div>
        </div>      
    </section>
  )
}

export default Birthdays
