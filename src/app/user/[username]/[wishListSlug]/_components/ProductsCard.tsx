import { ProductDTO } from '@/@dtos/ProductDTO';
import ImageCarousel from '@/components/ImageCarousel';
import Skeleton from '@/components/Skeleton';
import { convertDBToCurrency } from '@/utils/currency';

type Props =
  | { loading: true; product?: undefined; }
  | { loading?: false; product: ProductDTO; }

const ProductsCard = ({ loading, product }: Props) => {
  const price = {
    min: convertDBToCurrency(product?.price_min ?? 0),
    max: convertDBToCurrency(product?.price_max ?? 0),
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl shadow-base-300 border-2 border-base-200">
      <div className="card-body">
        {loading ? (
          <>
            <Skeleton.Image height={230} />
            <Skeleton.Line />
            <Skeleton.Text style={{ marginTop: 15 }} />
            <Skeleton.Text />
            <Skeleton.Text style={{ marginTop: 20 }} />
            <Skeleton.Text style={{ marginTop: 20 }} />
          </>
        ) : (
          <>
            <ImageCarousel images={product.image_links} />
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
            <div>
              {!!product.use_quantity && (
                <div className='flex justify-between pt-4'>
                  <span className='capitalize font-bold'>Quantity:</span>
                  <span>{product.quantity ?? 0}</span>
                </div>
              )}
              {!!product.use_price_range && (
                <div className='flex justify-between pt-4'>
                  <span className='capitalize font-bold'>Price range:</span>
                  <span>{price.min} - {price.max}</span>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProductsCard