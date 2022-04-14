import { Request, Response } from "express";
import { z } from "zod";
import CRUDService from "../service/crud.service";
import logger from "../utils/logger";
const service: CRUDService = new CRUDService(logger);

export async function createProductHandler(req: Request, res: Response) {
    try {
        const payload = req.body;
        const result = await service.insertData("INSERT INTO employee SET ?", payload);
        logger.info(result);
        res.send(result);
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}

export async function getProductsHandler(req: Request, res: Response) {
    try {
        const result = await service.executeQuery("SELECT * from employee");
        logger.info(result);
        res.send(result);
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}

export function deleteProductHandler(req: Request, res: Response) {
    const data = req.params.id;
    res.json({ data });
}