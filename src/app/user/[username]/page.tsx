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
    <div className="flex items-center flex-col">
      <h1 className="text-2xl pt-2 pb-2 font-bold self-center md:self-start">
        Wish Lists
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-4">
        {wishLists.map((wishList) => (
          <WishListCard
            key={wishList.id}
            name={wishList.name}
            description={wishList.slug}
            href={`/user/${userName}/${wishList.slug}`}
          />
        ))}
      </div>

      <div className="join pt-4 pb-4">
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
    </div>
  )
};

export default UserProfile;