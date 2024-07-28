import Leftbar from '@/components/HomePage/LeftMenu'
import Main from '@/components/HomePage/Main'
import Rightbar from '@/components/HomePage/RightMenu'
import React from 'react'

const HomePage = () => {
    return (
        <div className='flex gap-6'>
            {/* Leftbar */}
            <Leftbar />
            {/* Center  */}
            <Main />
            {/* Rightbar */}
            <Rightbar />
        </div>
    )
}

export default HomePage
