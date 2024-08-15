import { z } from 'zod';

export const createWishListSchema = z.object({
  name: z.string().min(1).max(255),
  slug: z.string().min(1).max(255),
  isActive: z.boolean(),
});
