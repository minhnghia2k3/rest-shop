import Logger from "../library/Logger";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const logger = new Logger();

// DB connect
const connectDB=() => {
    mongoose.connect(process.env.MONGO_URI || '')
    .then(() => {
        logger.info('Connected to Database!')
    })
    .catch((error) => {
        logger.error(`Failed when connecting to Database: ${error}`)
    })
}

export default connectDB;