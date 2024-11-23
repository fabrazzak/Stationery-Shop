import { Request, Response } from "express";
import { productServices } from "./product.service";
import { productValidation } from "./product.validation";


const createProduct = async (req: Request, res: Response) => {
  try {
    const { product } = req.body;
    const validProduct = productValidation.safeParse(product);

    if (validProduct.success) {
      console.log("Valid product data:", validProduct.data);
      const result = await productServices.createProductDB(validProduct.data);

      res.status(200).json({
        message: "Product created successfully",
        success: true,
        data: result,
      });
    } else {
      res.status(500).json({
        message: "Validation failed",
        success: false,
        data: validProduct.error,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all Data",
      success: false,
      error,
    });
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getProductDB();
    res.status(200).json({
      message: "Get all Products  successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all Data",
      success: false,
      error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProductDB(productId);
    console.log(result)
    res.status(200).json({
      message: "Get Single product successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all Data",
      success: false,
      error,
    });
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteSingleProductDB(productId);
    res.status(200).json({
      message: "Deleted  Single product successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all Data",
      success: false,
      error,
    });
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
 
    const { productId } = req.params;
    const { updateInfo } = req.body.productInfo
    const result = await productServices.updateSingleProductDB(productId,updateInfo);
    res.status(200).json({
      message: "Deleted  Single product successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all Data",
      success: false,
      error,
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