import express from "express";

const router = express.Router();

router.get('/', (req, res,next) => {
    res.status(200).json({
        message: 'Handling GET request /products'
    })
})

router.get('/:productId', (req,res,next) => {
    const {productId} = req.params
    res.status(200).json({
        message: `Handling GET request /products id=${productId}`
    })
})

router.post('/', (req, res,next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }

    res.status(200).json({
        message: 'Handling POST request /products',
        createdProduct: product
    })
})

router.patch('/:productId', (req,res,next) => {
    res.status(200).json({
        message: 'Handling PATCH request /products'
    })
})
router.delete('/:productId', (req,res,next) => {
    res.status(200).json({
        message: 'Handling DELETE request /products'
    })
})


export default router;