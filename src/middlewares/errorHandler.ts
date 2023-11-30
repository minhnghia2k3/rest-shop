import express, {Request, Response, NextFunction} from "express";
import Logger from "../library/Logger";

const logger = new Logger();

const errorHandler = (req:Request, res:Response, next:NextFunction) => {
    const error: Error = new Error('Not found!');
    logger.error(error);
    return res.status(404).json({error: error.message})
}

export default errorHandler;