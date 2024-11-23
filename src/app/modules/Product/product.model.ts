import { Schema, model } from "mongoose";
import { Product } from "./product.interface";


const productSchema = new Schema<Product>({
  name: { type: String, required: true , unique: true, message: ' {VALUE} is not supported for already exist' },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: {
      values: [
        "Writing",
        "Office Supplies",
        "Art Supplies",
        "Educational",
        "Technology",
      ],
      message: "{VALUE} is not supported",
    },
    required: true,
  },
  description: { type: String , required:true},
  quantity: { type: Number, required: true },
  inStock: { type: Boolean , required:true},
  isDeleted:{type:Boolean,default:false},
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  });


productSchema.pre('find',function(next){
    this.find({isDeleted:{$ne:true}})   

    next()

});
productSchema.pre('findOne',function(next){
    this.find({isDeleted:{$ne:true}})
    next()   

})



export const productModal = model<Product>("Product", productSchema);
