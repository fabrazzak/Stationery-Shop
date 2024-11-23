

import { Schema, model } from 'mongoose';
import { Order } from './order.interface';



const orderSchema= new Schema<Order>({

    email:{type:String, required:true},
    product:{type:String,required:true},
    quantity:{type:Number,required:true},
    totalPrice:{type:Number,required:true}
},{
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  })





 
export const OrderModel= model<Order>("Order",orderSchema)