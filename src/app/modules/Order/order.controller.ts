import { Request, Response } from 'express';
import { OrderServices } from './order.services';
import { orderValidation } from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order } = req.body;
    const validOrder = orderValidation.safeParse(order);

    if (validOrder.success) {
      const result = await OrderServices.createOrderDB(order);
      res.status(200).json({
        message: 'Order create Successfully',
        success: true,
        data: result,
      });
    } else {
      res.status(500).json({
        message: 'Validation failed',
        success: false,
        data: validOrder.error,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create order',
      success: false,
      error,
    });
  }
};

const getOrderRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getOrderRevenueDB();
    res.status(200).json({
      message: 'Get Total revenue',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to get revenue',
      success: false,
      error,
    });
  }
};

export const OrderController = {
  createOrder,
  getOrderRevenue,
};
