import { Order } from "./order.interface";
import { OrderModel } from "./order.model";



const createOrderDB= async (order:Order)=>{
    const result= await OrderModel.create(order)
    return result
}
const getOrderRevenueDB= async()=>{
    // const result= await OrderModel.find();

    const result= await OrderModel.aggregate([
        {$group:{
            _id:null,
            totalRevenue:{ $sum : {$multiply:["$quantity","$totalPrice"]}}
        }}
    ])

    return result
}



export const OrderServices={
    createOrderDB,
    getOrderRevenueDB
}


