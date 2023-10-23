import ComponentsGrid from '@/components/layouts/ComponentsGrid'
import PageTitle from '@/components/layouts/PageTitle'
import ProductsCard from './_components/ProductsCard'

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