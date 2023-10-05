import { PaginatedResponseDTO } from "@/@dtos/ResponseDTO";
import api from "@/api";
import WishListCard from "@/components/WishListCard";
import { ApiError } from "@/utils/errors/ApiError";
import { notFound } from "next/navigation";

export const revalidate = 0;

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

  const response: PaginatedResponseDTO<WishList> = await api.get(`users/${userName}/wish-lists?page=${pageNumber}`)
    .catch(e => {
      if (e instanceof ApiError) {
        if (e.statusCode === 404) return notFound();
        else throw e;
      }
    });

  const wishLists = response.data.data;

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
        {response.data.links.filter(el => !isNaN(Number(el.label))).map((link) => (
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