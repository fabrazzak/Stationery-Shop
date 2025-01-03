import { Request, Response } from 'express';
import { productServices } from './product.service';
import {  createProductSchema } from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const  product  = req.body;
    console.log(product)
    const validProduct = createProductSchema.parse(product);
   
      const result = await productServices.createProductDB(validProduct);
      res.status(200).json({
        message: 'Product created successfully',
        success: true,
        data: result,
      });

  } catch (error) {
    res.status(500).json({
      message: 'Failed to get all Data',
      success: false,
      error:error,
      stack : error instanceof Error && error.stack ,
    });
  }
};







const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getProductDB();
    res.status(200).json({
      message: 'Products retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve products',
      success: false,
      stack : error instanceof Error && error.stack ,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProductDB(productId);
    res.status(200).json({
      message: 'Product retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieved single product',
      success: false,
      stack : error instanceof Error && error.stack ,
    });
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteSingleProductDB(productId);
    res.status(200).json({
      message: 'Deleted  Single product successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to get all Data',
      success: false,
      stack : error instanceof Error && error.stack ,
    });
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const  productInfo  = req.body; 
    const result = await productServices.updateSingleProductDB(productId,productInfo);
    res.status(200).json({
      message: 'Product updated successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update product data',
      success: false,
      stack : error instanceof Error && error.stack ,
    });
  }
};


export const productController = {
  createProduct,
  getProduct,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
};
