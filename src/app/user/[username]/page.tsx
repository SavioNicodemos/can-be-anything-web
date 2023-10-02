import { PaginatedResponseDTO } from "@/@dtos/ResponseDTO";
import Link from "next/link";

type WishList = {
  id: string;
  name: string;
  slug: string;
  products_count: number;
};

type SearchParams = {
  page?: string;
};

type URLParams = {
  params: {
    username: string;
  },
  searchParams: SearchParams;
};

async function UserProfile({ params, searchParams }: URLParams) {
  const userName = params.username;
  const pageNumber = searchParams.page ? Number(searchParams.page) : 1;

  const response = await fetch(
    `http://localhost:8000/api/v1/users/${userName}/wish-lists?page=${pageNumber}`,
    { next: { revalidate: 0 } }
  );

  const jsonResponse: PaginatedResponseDTO<WishList> = await response.json();
  const wishLists = jsonResponse.data.data;

  return (
    <main>
      <p>Wish Lists</p>
      <ul>
        {wishLists.map((wishList) => (
          <li key={wishList.id}>
            <Link href={`/user/${userName}/${wishList.slug}`}>
              {wishList.name} - {wishList.products_count} products
            </Link>
          </li>
        ))}
      </ul>

      <div className="join">
        {jsonResponse.data.links.filter(el => !isNaN(Number(el.label))).map((link) => (
          <a
            key={link.label}
            href={`/user/${userName}?page=${link.label}`}
            className={`join-item btn ${!link.url && 'btn-disabled'} ${link.active && 'btn-active'}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </main>
  )
};

export default UserProfile;