import ProfileHeader from '@/components/ProfileHeader';
import React from 'react'

type Props = {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div>
      <ProfileHeader />
      {children}
    </div>
  )
}

export default layout