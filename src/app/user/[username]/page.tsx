import { PaginatedResponseDTO } from "@/@dtos/ResponseDTO";
import WishListCard from "@/components/WishListCard";
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
    <>
      <p>Wish Lists</p>
      <div className="grid grid-cols-3 gap-x-4 gap-y-4">
        {wishLists.map((wishList) => (
          <WishListCard
            key={wishList.id}
            name={wishList.name}
            description={wishList.slug}
            images={['https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg']}
            href={`/user/${userName}/${wishList.slug}`}
          />
        ))}
      </div>

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
    </>
  )
};

export default UserProfile;