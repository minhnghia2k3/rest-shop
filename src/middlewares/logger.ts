import express, {Request, Response, NextFunction} from "express";
import Logger from '../library/Logger';

const logger = new Logger()

const logStatus= (req:Request, res:Response,next:NextFunction) => {
    // Log the request
 logger.info(`Incoming => Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

 // Listen the response - on finish event
 res.on('finish', () => {
     logger.info(`Outgoing => Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
 });

 next();
}

export default logStatus;