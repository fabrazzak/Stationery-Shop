import express from 'express'
import { OrderController } from './order.controller';



const router= express.Router();


router.post("/create-order",OrderController.createOrder)
router.get("/revenue",OrderController.getOrderRevenue)


export const OrderRouter=router;