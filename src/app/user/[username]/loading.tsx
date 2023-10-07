import WishListCard from '@/components/WishListCard'
import React from 'react'

const LoadingWishlists = () => {
  return (
    <>
      <h1 className="text-2xl pt-2 pb-2 font-bold self-center md:self-start">
        Wish Lists
      </h1>
      <div className="grid grid-cols-3 gap-x-4 gap-y-4">
        <WishListCard loading />
        <WishListCard loading />
        <WishListCard loading />
        <WishListCard loading />
        <WishListCard loading />
        <WishListCard loading />
        <WishListCard loading />
      </div>
    </>
  )
}

export default LoadingWishlists