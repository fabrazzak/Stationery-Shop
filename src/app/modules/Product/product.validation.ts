import { z } from 'zod';

// Zod schema for Product validation
export const productSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  brand: z.string().min(1, { message: "Brand is required" }),
  price: z.number().min(0, { message: "Price must be a positive number" }),
  category: z.enum([
    'Writing',
    'Office Supplies',
    'Art Supplies',
    'Educational',
    'Technology',
  ], { message: "Category must be one of the allowed values" }),
  description: z.string().min(1, { message: "Description is required" }),
  quantity: z.number().min(0, { message: "Quantity must be a positive number" }),
  inStock: z.boolean({ required_error: "InStock is required" }),
});

export const createProductSchema = productSchema;

export const updateProductSchema = productSchema.partial(); 