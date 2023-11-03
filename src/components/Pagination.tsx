'use client'

import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ currentPage, itemCount, pageSize }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemCount / pageSize);

  //If only one page, don't show pagination component
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());

    router.push("?" + params.toString());
  }

  return (
    <div className='items-center gap-2 pt-4 pb-4'>
      <h1 className="text-lg">Page {currentPage} of {pageCount}</h1>
      <div className='join'>
        <Button
          color="gray"
          disabled={currentPage === 1}
          onClick={() => changePage(1)}
        >
          <DoubleArrowLeftIcon />
        </Button>
        <Button
          color="gray"
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          color="gray"
          disabled={currentPage === pageCount}
          onClick={() => changePage(currentPage + 1)}
        >
          <ChevronRightIcon />
        </Button>
        <Button
          color="gray"
          disabled={currentPage === pageCount}
          onClick={() => changePage(pageCount)}
        >
          <DoubleArrowRightIcon />
        </Button>
      </div>
    </div>
  )
}

const Button = ({ children, ...props }: JSX.IntrinsicElements['button']) => {
  return (
    <button
      className='btn join-item btn-primary'
      {...props}
    >
      {children}
    </button>
  )
}

export default Pagination