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
exports.OrderController = void 0;
const order_services_1 = require("./order.services");
const order_validation_1 = require("./order.validation");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order } = req.body;
        const validOrder = order_validation_1.orderValidation.safeParse(order);
        if (validOrder.success) {
            const result = yield order_services_1.OrderServices.createOrderDB(order);
            res.status(200).json({
                message: 'Order create Successfully',
                success: true,
                data: result,
            });
        }
        else {
            res.status(500).json({
                message: 'Validation failed',
                success: false,
                data: validOrder.error,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to create order',
            success: false,
            error,
        });
    }
});
const getOrderRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_services_1.OrderServices.getOrderRevenueDB();
        res.status(200).json({
            message: 'Get Total revenue',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to get revenue',
            success: false,
            error,
        });
    }
});
exports.OrderController = {
    createOrder,
    getOrderRevenue,
};
