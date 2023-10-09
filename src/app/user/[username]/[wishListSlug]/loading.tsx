import ProductsCard from '@/components/ProductsCard'
import ComponentsGrid from '@/components/layouts/ComponentsGrid'
import PageTitle from '@/components/layouts/PageTitle'
import React from 'react'

const LoadProducts = () => {
  return (
    <>
      <PageTitle>
        Products
      </PageTitle>

      <ComponentsGrid>
        <ProductsCard loading={true} />
        <ProductsCard loading={true} />
        <ProductsCard loading={true} />
        <ProductsCard loading={true} />
        <ProductsCard loading={true} />
        <ProductsCard loading={true} />
        <ProductsCard loading={true} />
      </ComponentsGrid>
    </>
  )
}

export default LoadProducts