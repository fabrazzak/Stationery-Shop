import { Schema, model } from 'mongoose';
import { Order } from './order.interface';

const orderSchema = new Schema<Order>(
  {
    email: { type: String, required: true, match: /.+\@.+\..+/, },
    product: { type: String, required: true },
    quantity: { type: Number, required: true ,min: 1},
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    versionKey: false,
  },
);

export const OrderModel = model<Order>('Order', orderSchema);
