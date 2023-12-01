import express, { Request, Response } from "express";
import Product from "../models/product";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();

        return res.status(200).json({ products })
    } catch (err) {
        return res.status(400).json({ err })
    }
}

export const getProductById = async (req: Request, res: Response) => {
    const { productId } = req.params
    try {
        const product = await Product.findById(productId);

        if (!product) return res.status(404).json({ message: "Not found!" })

        return res.status(200).json({ product })
    } catch (err) {
        return res.status(400).json({ err })
    }
}

export const createProduct = async (req: Request, res: Response) => {
    const name = req.body.name
    const price = req.body.price
    try {
        const product = await Product.create({
            name, price
        })
        return res.status(201).json({ product })
    } catch (err) {
        return res.status(400).json({ err })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { productId } = req.params
    const name = req.body.name
    const price = req.body.price
    try {
        const product = await Product.findByIdAndUpdate(
            productId,
            {
                name: name,
                price: price
            },
            { new: true })
        if (!product) return res.status(404).json({ message: "Product doesn't exist!" })
        return res.status(201).json({ product })
    } catch (err) {
        return res.status(400).json({ err })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { productId } = req.params
    try {
        const product = await Product.findByIdAndDelete(productId)
        if (!product) return res.status(404).json({ message: "Product doesn't exist!" })
        return res.status(201).json({ product })
    } catch (err) {
        return res.status(400).json({ err })
    }
}

