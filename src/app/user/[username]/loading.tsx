import WishListCard from '@/components/WishListCard'
import ComponentsGrid from '@/components/layouts/ComponentsGrid'
import PageTitle from '@/components/layouts/PageTitle'
import React from 'react'

const LoadingWishlists = () => {
  return (
    <>
      <PageTitle>
        Wish Lists
      </PageTitle>
      <ComponentsGrid>
        <WishListCard loading />
        <WishListCard loading />
        <WishListCard loading />
        <WishListCard loading />
        <WishListCard loading />
        <WishListCard loading />
        <WishListCard loading />
      </ComponentsGrid>
    </>
  )
}

export default LoadingWishlists