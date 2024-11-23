"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidation = void 0;
const zod_1 = require("zod");
// Zod schema for order validation
exports.orderValidation = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email format").nonempty("Email is required"), // Validates email format and ensures it's non-empty
    product: zod_1.z.string().nonempty("Product is required"), // Ensures product name is non-empty
    quantity: zod_1.z.number().int().positive("Quantity must be a positive integer").nonnegative("Quantity must be a non-negative integer"), // Validates quantity as a positive integer
    totalPrice: zod_1.z.number().positive("Total price must be greater than 0"), // Ensures total price is a positive number
});
