import { Product } from './product.interface';
import { productModal } from './product.model';

const createProductDB = async (product: Product) => {
  const result = await productModal.create(product);
  return result;
};

const getProductDB = async () => {
  const result = await productModal.find();
  return result;
};

const getSingleProductDB = async (productId: string) => {
  const result = await productModal.findOne({ _id: productId });
  return result;
};

const deleteSingleProductDB = async (id: string) => {
  const result = await productModal.updateOne({ _id: id }, { isDeleted: true });
  return result;
};

const updateSingleProductDB = async (id: string, data:object) => {
  
  const result = await productModal.updateOne({ _id:id }, {$set: data });
 
  return result;
};

export const productServices = {
  createProductDB,
  getProductDB,
  getSingleProductDB,
  deleteSingleProductDB,
  updateSingleProductDB,
};
