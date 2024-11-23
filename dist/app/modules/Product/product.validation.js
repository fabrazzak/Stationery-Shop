"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = void 0;
const zod_1 = require("zod");
// Zod schema for product validation
exports.productValidation = zod_1.z.object({
    name: zod_1.z.string().nonempty("Name is required"), // Validates 'name' as a non-empty string
    brand: zod_1.z.string().nonempty("Brand is required"), // Validates 'brand' as a non-empty string
    price: zod_1.z.number().positive("Price must be greater than 0"), // Ensures 'price' is a positive number
    category: zod_1.z.enum([
        "Writing",
        "Office Supplies",
        "Art Supplies",
        "Educational",
        "Technology",
    ]), // Restricts 'category' to specific values
    description: zod_1.z.string().nonempty("Description is required"), // 'description' is required as a non-empty string
    quantity: zod_1.z.number().int().nonnegative("Quantity must be a non-negative integer"), // Ensures 'quantity' is a non-negative integer
    inStock: zod_1.z.boolean(), // 'inStock' is required as a boolean
    isDeleted: zod_1.z.boolean(), // 'inStock' is required as a boolean
});
