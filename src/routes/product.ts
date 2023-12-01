import express from "express";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller"
const router = express.Router();

router.get('/', getProducts)
router.get('/:productId', getProductById)
router.post('/create', createProduct)
router.patch('/update/:productId', updateProduct)
router.delete('/delete/:productId', deleteProduct)

export default router;