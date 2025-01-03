import { Schema, model } from 'mongoose';
import { Product } from './product.interface';

const productSchema = new Schema<Product>(
  {
    name: { type: String, required: true,  unique: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      enum:[
          'Writing',
          'Office Supplies',
          'Art Supplies',
          'Educational',
          'Technology',
        ],     
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true }, 
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    versionKey: false,
  },
);

productSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});
productSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const productModal = model<Product>('Product', productSchema);
