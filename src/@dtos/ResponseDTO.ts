interface LaravelPaginationLinks {
  url: string | null;
  label: string;
  active: boolean;
}

export type LaravelPaginationResponse<T> = {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: LaravelPaginationLinks[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

export type ResponseDTO<T> = {
  data: T;
  message: string;
  success: boolean;
};

export type PaginatedResponseDTO<T> = {
  data: LaravelPaginationResponse<T>;
  message: string;
  success: boolean;
};
