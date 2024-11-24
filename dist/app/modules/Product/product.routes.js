"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
//  create new product
router.post('/create-product', product_controller_1.productController.createProduct);
// get all product
router.get('/', product_controller_1.productController.getProduct);
// get  single product
router.get('/:productId', product_controller_1.productController.getSingleProduct);
// delete single  product
router.delete('/:productId', product_controller_1.productController.deleteSingleProduct);
// update single  product
router.put('/:productId', product_controller_1.productController.updateSingleProduct);
exports.productRouter = router;
