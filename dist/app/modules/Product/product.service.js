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
exports.productServices = void 0;
const product_model_1 = require("./product.model");
const createProductDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModal.create(product);
    return result;
});
const getProductDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModal.find();
    return result;
});
const getSingleProductDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModal.findOne({ _id: productId });
    return result;
});
const deleteSingleProductDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModal.updateOne({ _id: id }, { isDeleted: true });
    return result;
});
const updateSingleProductDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModal.updateOne({ _id: id }, { $set: data });
    return result;
});
exports.productServices = {
    createProductDB,
    getProductDB,
    getSingleProductDB,
    deleteSingleProductDB,
    updateSingleProductDB,
};
