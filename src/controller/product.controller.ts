import { Request, Response } from "express";
import { string, z } from "zod";
import { Product } from "../schema/product.schema";
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
        const id: any = req.query.id;
        let sqlquery: string = "SELECT * from employee";
        if (id !== undefined) {
            sqlquery = `SELECT * from employee WHERE id=${id}`;
        }
        const result = await service.executeQuery(sqlquery);
        logger.info(result);
        res.send(result);
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}

export async function deleteProductHandler(req: Request, res: Response) {
    try {
        const id: string = `${req.query.id}`;
        const result = await service.executeQuery(`DELETE FROM employee WHERE id=${id}`);
        logger.info(result);
        res.send(result);
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}

export async function updateProductHandler(req: Request, res: Response) {
    try {
        var employee: Product = req.body;
        //using remote database for testing - if using mysql server we can use procedure 
        const result = await service.executeQuery(`UPDATE employee SET name=\'${employee.name}\', email=\'${employee.email}\' WHERE id=${employee.id}`);
        logger.info(result);
        res.send(result);
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}