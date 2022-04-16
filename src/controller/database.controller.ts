import { Request, Response } from "express";
import { MysqlError } from "mysql";
import { z } from "zod";
import CRUDService from "../service/crud.service";
import logger from "../utils/logger";
const service: CRUDService = new CRUDService(logger);


export async function createDBHandler(req: Request, res: Response) {
    try {
        const result = await service.executeQuery("CREATE DATABASE blogdb");
        logger.info(result);
        res.send(result);
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}

export async function createTableHandler(req: Request, res: Response) {
    try {
        const result = await service.executeQuery("CREATE TABLE blog(id int AUTO_INCREMENT, blogtitle VARCHAR(255), email VARCHAR(255), blog VARCHAR(1000), PRIMARY KEY(id))");
        logger.info(result);
        res.send(result);
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}