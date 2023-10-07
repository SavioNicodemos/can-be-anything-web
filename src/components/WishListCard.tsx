import Link from 'next/link';
import React from 'react'
import ImageCarousel from './ImageCarousel';
import Skeleton from './Skeleton';

type Props =
  | { loading: true; name?: undefined; description?: undefined; href?: undefined; }
  | { loading?: false; name: string; description: string; href: string; }

const WishListCard = ({ name, description, href = '', loading = false }: Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        {loading ? (
          <>
            <Skeleton.Line />
            <Skeleton.Text style={{ marginTop: 15, marginBottom: 5 }} />
          </>
        ) : (
          <>
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
          </>
        )}
        <div className="card-actions justify-end">
          <Link href={href}>
            <button className='btn btn-primary'>
              Check Wishlist
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WishListCard