import express from "express";
import Logger from "./library/Logger";
import productRoutes from "./routes/products"

const logger = new Logger();
const app = express()
const port = process.env.PORT || 3000


/** Routes */
app.use('/products', productRoutes)

app.listen(port, () => {
    logger.info(`Server listening at http://localhost:${port}`)
})
