import { z } from 'zod';

// Zod schema for order validation
export const orderValidation = z.object({
  email: z.string().email('Invalid email format').nonempty('Email is required'), // Validates email format and ensures it's non-empty
  product: z.string().nonempty('Product is required'), // Ensures product name is non-empty
  quantity: z
    .number()
    .int()
    .positive('Quantity must be a positive integer')
    .nonnegative('Quantity must be a non-negative integer'), // Validates quantity as a positive integer
  totalPrice: z.number().positive('Total price must be greater than 0'), // Ensures total price is a positive number
});
