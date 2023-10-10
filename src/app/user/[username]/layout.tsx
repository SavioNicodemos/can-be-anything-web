import { ResponseDTO } from '@/@dtos/ResponseDTO';
import { PublicUserDTO } from '@/@dtos/UserDTO';
import api from '@/api';
import ProfileHeader from '@/components/ProfileHeader';
import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
  children: React.ReactNode;
  params: {
    username: string;
  }
}

const layout = async ({ children, params }: Props) => {
  const { username } = params;

  const response: ResponseDTO<PublicUserDTO> = await api.get(
    `public/users/${username}`,
    { next: { revalidate: 60 * 60 } }
  ).catch(e => {
    notFound();
  });

  const user = response.data;

  return (
    <div className='flex flex-col flex-1 justify-center align-center mx-auto'>
      <ProfileHeader user={user} />
      {children}
    </div>
  )
}

export default layout