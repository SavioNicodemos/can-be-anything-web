export type ProductDTO = {
  id: string;
  name: string;
  description: string;
  use_price_range: boolean;
  price_min: number;
  price_max: number;
  use_quantity: boolean;
  quantity: number;
  image_links: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
  wish_list_id: number;
};
