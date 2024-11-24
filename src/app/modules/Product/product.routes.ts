import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

//  create new product
router.post('/create-product', productController.createProduct);

// get all product
router.get('/', productController.getProduct);

// get  single product
router.get('/:productId', productController.getSingleProduct);

// delete single  product
router.delete('/:productId', productController.deleteSingleProduct);

// update single  product
router.put('/:productId', productController.updateSingleProduct);

export const productRouter = router;
