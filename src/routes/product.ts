import express, { Request } from "express";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller"
import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

const fileFilter = (req: Request, file: any, cb: (error: Error | null, except?: boolean) => {}) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        cb(null, true)
    } else {
        cb(null, false)
        cb(new Error(`Only accept type .jpeg | jpg`))
    }
}

// TODO: 1024kb * 1024kb = 1mb * 5 => 5mb
const upload = multer({ storage: storage, fileFilter: fileFilter, limits: { fileSize: 1024 * 1024 * 5 } })

const router = express.Router();

router.get('/', getProducts)
router.get('/:productId', getProductById)
router.post('/create', upload.single('productImage'), createProduct)
router.patch('/update/:productId', updateProduct)
router.delete('/delete/:productId', deleteProduct)

export default router;