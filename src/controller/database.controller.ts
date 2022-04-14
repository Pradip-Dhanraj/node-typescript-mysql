import { Request, Response } from "express";
import { MysqlError } from "mysql";
import { z } from "zod";
import CRUDService from "../service/crud.service";
import logger from "../utils/logger";
const service: CRUDService = new CRUDService(logger);


export async function createDBHandler(req: Request, res: Response) {
    try {
        const result = await service.executeQuery("CREATE DATABASE dhanrajdb");
        logger.info(result);
        res.send(result);
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}

export async function createTableHandler(req: Request, res: Response) {
    try {
        const result = await service.executeQuery("CREATE TABLE product(id int AUTO_INCREMENT, product_name VARCHAR(255), support_contact_email VARCHAR(255), PRIMARY KEY(id))");
        logger.info(result);
        res.send(result);
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}

