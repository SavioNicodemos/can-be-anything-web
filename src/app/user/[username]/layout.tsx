import ProfileHeader from '@/components/ProfileHeader';
import React from 'react'

type Props = {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col flex-1 justify-center align-center mx-auto'>
      <ProfileHeader />
      {children}
    </div>
  )
}

export default layout