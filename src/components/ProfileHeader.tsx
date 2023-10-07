import Image from 'next/image'
import React from 'react'

const ProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4">
      <div className="w-full flex justify-center md:pr-8 md:justify-end">
        <Image
          src='https://github.com/savionicodemos.png'
          alt="Profile Picture"
          height={128}
          width={128}
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>

      <div className="w-full flex flex-col items-center md:items-start text-center md:text-left mt-4 md:mt-0">
        <h1 className="text-2xl md:text-2xl font-semibold">Nicodemos Santos</h1>
        <h2 className="text-xl font-semibold text-base-content filter brightness-75">@nicodemos</h2>
      </div>
    </div>
  )
}

export default ProfileHeader