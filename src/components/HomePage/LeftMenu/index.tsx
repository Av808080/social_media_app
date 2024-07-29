import React from 'react'
import Services from './Services'
import Ads from '@/components/shared/Ads'
import ProfileView from '@/components/shared/ProfileView'

const Leftbar = () => {
  return (
    <div className='hidden xl:flex w-[20%] flex-col gap-8'>
      {/* LeftBar */}
      <ProfileView />
      <Services />
      <Ads size='sm' />
    </div>
  )
}

export default Leftbar
