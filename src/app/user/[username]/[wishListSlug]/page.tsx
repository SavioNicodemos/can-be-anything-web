import { ProductDTO } from "@/@dtos/ProductDTO";
import { PaginatedResponseDTO } from "@/@dtos/ResponseDTO";
import api from "@/api";
import ComponentsGrid from "@/components/layouts/ComponentsGrid";
import PageTitle from "@/components/layouts/PageTitle";
import { NoGift } from "@/components/svgs/NoGift";
import { ApiError } from "@/utils/errors/ApiError";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductsCard from "./_components/ProductsCard";

type URLParams = {
  params: {
    username: string;
    wishListSlug: string;
  },
  searchParams: {
    page: string;
  }
};

export const revalidate = 0;

async function WishListProducts({ params, searchParams }: URLParams) {
  const { username, wishListSlug } = params;

  const response: PaginatedResponseDTO<ProductDTO> = await api.get(
    `users/${username}/wish-lists/${wishListSlug}/products`
  ).catch(e => {
    if (e instanceof ApiError) {
      if (e.statusCode === 404) return notFound();
      else throw e;
    }
  });

  const products = response.data.data;

  return (
    <>
      <PageTitle>
        Products
      </PageTitle>

      <ComponentsGrid>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))
        ) : (
          <>
            <div /> {/* Placeholder for the first position */}
            <div className="flex flex-col flex-1 align-center justify-center">
              <NoGift height={350} />
              <p className="text-center">
                This wish list has no products yet.
              </p>
              <Link href={`/user/${username}`} className="btn btn-primary mt-8" >
                Back to profile
              </Link>
            </div>
          </>
        )}
      </ComponentsGrid>
    </>
  )
};

export default WishListProducts;