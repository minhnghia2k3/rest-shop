import express from "express";
import Logger from "./library/Logger";
import route from "./routes/route"
import middlewares from "./middlewares/middlewares";

const logger = new Logger();
const app = express()
const port = process.env.PORT || 3000

/**Log status */
app.use(middlewares.logStatus)

/** Routes */
app.use('/products', route.productRoutes)
app.use('/orders', route.orderRoutes)

/** Handle request */
app.use(middlewares.errorHandler);

app.listen(port, () => {
    logger.info(`Server listening at http://localhost:${port}`)
})
