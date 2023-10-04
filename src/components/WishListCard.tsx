import Link from 'next/link';
import React from 'react'
import ImageCarousel from './ImageCarousel';

type Props = {
  name: string;
  description: string;
  images: string[];
  href: string;
}

const WishListCard = ({ name, description, images, href }: Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <ImageCarousel images={images} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href={href} className="btn btn-primary">Check Wishlist</Link>
        </div>
      </div>
    </div>
  )
}

export default WishListCard