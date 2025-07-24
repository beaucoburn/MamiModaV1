import { z } from 'zod';

export type AdminGetProductTypeParamsType = z.infer<
  typeof AdminGetProductTypeParams
>;
export const AdminGetProductTypeParams = z.object({
  fields: z.string().optional(),
});

export type AdminGetProductTypesParamsType = z.infer<
  typeof AdminGetProductTypesParams
>;
export const AdminGetProductTypesParams = z.object({
  limit: z.number().default(10),
  offset: z.number().default(0),
  q: z.string().optional(),
  id: z.union([z.string(), z.array(z.string())]).optional(),
  value: z.union([z.string(), z.array(z.string())]).optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  deleted_at: z.string().optional(),
});
