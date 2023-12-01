import express from "express";
import { getOrders, getOrderById, createOrder, updateOrder, deleteOrder } from "../controllers/order.controller";
const router = express.Router();

router.get('/', getOrders)
router.get('/:orderId', getOrderById)
router.post('/create', createOrder)
router.patch('/update/:orderId', updateOrder)
router.delete('/delete/:orderId', deleteOrder)


export default router;