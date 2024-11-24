import { z } from 'zod';

// Zod schema for product validation
export const productValidation = z.object({
  name: z.string().nonempty('Name is required'), // Validates 'name' as a non-empty string
  brand: z.string().nonempty('Brand is required'), // Validates 'brand' as a non-empty string
  price: z.number().positive('Price must be greater than 0'), // Ensures 'price' is a positive number
  category: z.enum([
    'Writing',
    'Office Supplies',
    'Art Supplies',
    'Educational',
    'Technology',
  ]), // Restricts 'category' to specific values
  description: z.string().nonempty('Description is required'), // 'description' is required as a non-empty string
  quantity: z
    .number()
    .int()
    .nonnegative('Quantity must be a non-negative integer'), // Ensures 'quantity' is a non-negative integer
  inStock: z.boolean(), // 'inStock' is required as a boolean
  isDeleted: z.boolean(), // 'inStock' is required as a boolean
});
