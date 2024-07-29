import React from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Ads from '@/components/shared/Ads'
import UserProfile from '@/components/shared/UserProfile'

const Rightbar = () => {
  return (
    <div className=' hidden w-[30%] lg:flex flex-col gap-8 '>
      <UserProfile />
      {/* Friend Requests */}
      <FriendRequests />
      {/* Birthdays */}
      <Birthdays />
      {/* Ads */}
      <Ads />
    </div>
  )
}

export default Rightbar
