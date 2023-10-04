"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

type Props = {
  images: string[];
  width?: number;
  height?: number;
};

const ImageCarousel = ({ images, width = 385, height = 230 }: Props) => {
  const haveImages = images.length > 0;

  if (!haveImages) {
    images = ['/images/no-image.svg']
  }

  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay={haveImages}
        infiniteLoop={haveImages}
        showArrows={haveImages}
        showStatus={haveImages}
        showIndicators={haveImages}
        interval={(20000 * Math.random()) + 10000}
        className="bg-gray-100"
      >
        {images.map((image) => (
          <Image
            key={image}
            src={image}
            alt='Latest products image'
            width={width}
            height={height}
            className="object-cover"
            style={{ height, width }}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default ImageCarousel