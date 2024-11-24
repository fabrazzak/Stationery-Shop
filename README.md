# Stationery Shop API

This project is a fully functional API for managing a Stationery Shop. The API allows you to create, retrieve, update, and delete stationery products, place orders, and calculate revenue.

## Features

### Stationery Product Management

- **Create a new product**.
- **Retrieve all products** or search by name, brand, or category.
- **Retrieve a single product** by its ID.
- **Update product details**, such as price and quantity.
- **Delete a product**.

### Order Management

- **Place an order** for a stationery product.

### Revenue Calculation

- **Calculate total revenue** from all orders using MongoDB aggregation.

### Error Handling

- **Validation errors** for incorrect or missing data.
- **Resource not found** errors for unavailable products or orders.
- Proper **stack trace** and debugging information for development.

## API Endpoints

### Products

- **Create Product**: `POST /api/products`
- **Get All Products**: `GET /api/products`
- **Get Single Product**: `GET /api/products/:productId`
- **Update Product**: `PUT /api/products/:productId`
- **Delete Product**: `DELETE /api/products/:productId`

### Orders

- **Create Order**: `POST /api/orders`
- **Calculate Revenue**: `GET /api/orders/revenue`

## Setup Instructions

### Prerequisites

- Node.js (>=14.0)
- MongoDB (local or cloud instance)
- TypeScript (for development)
