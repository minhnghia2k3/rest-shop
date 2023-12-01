import express, { Request, Response } from "express";
import Order from "../models/order";

export const getOrders = async (req: Request, res: Response) => {
    try {
        const orders = await Order.find().populate('product');
        const count = orders.length
        return res.status(200).json({ count, orders })
    } catch (err: any) {
        console.log(err.message)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

export const getOrderById = async (req: Request, res: Response) => {
    const { orderId } = req.params
    try {
        const order = await Order.findById(orderId).populate('product');

        if (!order) return res.status(404).json({ message: "Not found!" })

        return res.status(200).json({ order })
    } catch (err: any) {
        console.log(err.message)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

export const createOrder = async (req: Request, res: Response) => {
    const product = req.body.product
    const quantity = req.body.quantity
    try {
        const order = await Order.create({
            product: product,
            quantity
        })
        return res.status(201).json({ order })
    } catch (err: any) {
        console.log(err.message)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

export const updateOrder = async (req: Request, res: Response) => {
    const { orderId } = req.params
    const product = req.body.product
    const quantity = req.body.quantity
    try {
        console.log(product)
        const order = await Order.findByIdAndUpdate(
            orderId,
            {
                product: product,
                quantity: quantity
            },
            { new: true })
        if (!order) return res.status(404).json({ message: "Order doesn't exist!" })
        return res.status(201).json({ order })
    } catch (err: any) {
        console.log(err.message)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

export const deleteOrder = async (req: Request, res: Response) => {
    const { orderId } = req.params
    try {
        console.log(orderId)
        const order = await Order.findByIdAndDelete(orderId)
        if (!order) return res.status(404).json({ message: "Order doesn't exist!" })
        return res.status(201).json({ order })
    } catch (err: any) {
        console.log(err.message)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

