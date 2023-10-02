import Link from "next/link";

type Product = {
  id: string;
  name: string;
};

type URLParams = {
  params: {
    username: string;
    wishListSlug: string;
  },
  searchParams: {
    page: string;
  }
};

async function WishListProducts({ params, searchParams }: URLParams) {
  const response = await fetch(
    `http://localhost:8000/api/v1/users/${params.username}/wish-lists/${params.wishListSlug}/products`,
    { next: { revalidate: 10 } }
  );

  const jsonResponse = await response.json();
  const data = jsonResponse.data.data

  return (
    <main>
      <h1>Hello {params.username}</h1>

      <p>Wish Lists</p>
      <ul>
        {data.map((product: Product) => (
          <li key={product.id}>
            <Link href={`/${params.username}/${product.name}`}>
              {product.name} - product
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
};

export default WishListProducts;