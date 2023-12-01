import express, { Request, Response, NextFunction } from "express";
import Logger from "./library/Logger";
import route from "./routes/route"
import middlewares from "./middlewares/middlewares";
import connectDB from "./db/connect";

const logger = new Logger();
const app = express()
const port = process.env.PORT || 3000


// Connect to DB
connectDB();

/**Log status */
app.use(middlewares.logStatus)

/** Body parser */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


/** Header of CORs */
app.use((req, res, next) => {
    // Allow * client access the API
    res.header('Access-Control-Allow-Origin', '*');
    // Allow following types of header
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    // If pass OPTION method -> Return all options can use in API
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
    }
    next();
})

/** Routes */
app.use('/product', route.productRoutes)
app.use('/order', route.orderRoutes)

/** Handle request */
app.use(middlewares.errorHandler);

app.listen(port, () => {
    logger.info(`Server listening at http://localhost:${port}`)
})
