import { z } from 'zod';

// Zod schema for order validation
export const orderValidation = z.object({
  email: z.string().email('Invalid email format'), // Validates email format and ensures it's non-empty
  product: z.string().min(1,{message:"Product ID is required"}), // Ensures product name is non-empty
  quantity: z
    .number()
    .int()
    .positive('Quantity must be a positive integer'), // Validates quantity as a positive integer
  totalPrice: z.number().positive('Total price must be greater than 0'), // Ensures total price is a positive number
});
