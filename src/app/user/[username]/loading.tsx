import WishListCard from '@/components/WishListCard'
import React from 'react'

const LoadingWishlists = () => {
  return (
    <>
      <p>Wish Lists</p>
      <div className="grid grid-cols-3 gap-x-4 gap-y-4">
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