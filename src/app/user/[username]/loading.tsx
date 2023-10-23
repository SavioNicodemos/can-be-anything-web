import ComponentsGrid from '@/components/layouts/ComponentsGrid'
import PageTitle from '@/components/layouts/PageTitle'
import WishListCard from './_components/WishListCard'

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