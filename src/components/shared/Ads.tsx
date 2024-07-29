import Image from 'next/image'
import React from 'react'

interface AdsProps {
    size?: "sm" | "md" | "lg"
}

const Ads = ({ size='md' }: AdsProps) => {
    return (
        <section className='flex flex-col rounded-md bg-white shadow-md shadow-slate-400 py-4 px-4 gap-4'>
            <div className='flex justify-between items-center '>
                <h3 className='text-gray-500 font-bold'>Sponsered Ads</h3>
                <Image src='/images/more.png' width={16} height={16} alt='more' />
            </div>
            <Image className='rounded-lg' src='/image1.jpeg' width={256} height={256} alt='' />
            <div className='flex gap-4 items-center'>
                <Image className='rounded-full' src='/image1.jpeg' width={32} height={32} alt='avatar' />
                <p className='font-bold text-blue-500'>Ali khatami</p>
            </div>
            <p className={`font-semibold ${size === "sm"&&"text-sm"}`} >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi similique illum cumque
                itaque nulla provident! Voluptatum blanditiis quas 
            </p>
            <button className='bg-gray-300 text-gray-500 hover:bg-gray-400 hover:text-gray-700 duration-200 w-full rounded-md py-1 tracking-wide'>Learn More</button>
        </section>
    )
}

export default Ads
