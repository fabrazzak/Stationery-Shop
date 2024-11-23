"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = require("./product.validation");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product } = req.body;
        const validProduct = product_validation_1.productValidation.safeParse(product);
        if (validProduct.success) {
            console.log("Valid product data:", validProduct.data);
            const result = yield product_service_1.productServices.createProductDB(validProduct.data);
            res.status(200).json({
                message: "Product created successfully",
                success: true,
                data: result,
            });
        }
        else {
            res.status(500).json({
                message: "Validation failed",
                success: false,
                data: validProduct.error,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to get all Data",
            success: false,
            error,
        });
    }
});
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.productServices.getProductDB();
        res.status(200).json({
            message: "Get all Products  successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to get all Data",
            success: false,
            error,
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.getSingleProductDB(productId);
        console.log(result);
        res.status(200).json({
            message: "Get Single product successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to get all Data",
            success: false,
            error,
        });
    }
});
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.deleteSingleProductDB(productId);
        res.status(200).json({
            message: "Deleted  Single product successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to get all Data",
            success: false,
            error,
        });
    }
});
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const { updateInfo } = req.body.productInfo;
        const result = yield product_service_1.productServices.updateSingleProductDB(productId, updateInfo);
        res.status(200).json({
            message: "Deleted  Single product successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to get all Data",
            success: false,
            error,
        });
    }
});
exports.productController = {
    createProduct,
    getProduct,
    getSingleProduct,
    deleteSingleProduct,
    updateSingleProduct,
};
