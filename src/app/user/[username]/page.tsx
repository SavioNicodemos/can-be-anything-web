import { PaginatedResponseDTO } from "@/@dtos/ResponseDTO";
import api from "@/api";
import ComponentsGrid from "@/components/layouts/ComponentsGrid";
import PageTitle from "@/components/layouts/PageTitle";
import { ApiError } from "@/utils/errors/ApiError";
import { notFound } from "next/navigation";

import { Pagination } from "@/components";
import WishListCard from "./_components/WishListCard";

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
      <PageTitle>
        Wish Lists
      </PageTitle>

      <ComponentsGrid>
        {wishLists.map((wishList) => (
          <WishListCard
            key={wishList.id}
            name={wishList.name}
            description={wishList.slug}
            href={`/user/${userName}/${wishList.slug}`}
          />
        ))}
      </ComponentsGrid>

      <Pagination currentPage={pageNumber} itemCount={response.data.total} pageSize={response.data.per_page} />
    </div>
  )
};

export default UserProfile;