import { Request, Response } from "express";
import { string, z } from "zod";
import { Product } from "../schema/product.schema";
import CRUDService from "../service/crud.service";
import logger from "../utils/logger";
const service: CRUDService = new CRUDService(logger);

export async function createProductHandler(req: Request, res: Response) {
    try {
        const payload = req.body;
        const result = await service.insertData("INSERT INTO product SET ?", payload);
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
        let sqlquery: string = "SELECT * from product";
        if (id !== undefined) {
            sqlquery = `SELECT * from product WHERE id=${id}`;
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
        const result = await service.executeQuery(`DELETE FROM product WHERE id=${id}`);
        logger.info(result);
        res.send(result);
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}

export async function updateProductHandler(req: Request, res: Response) {
    try {
        var product: Product = req.body;
        //using remote database for testing - if using mysql server we can use procedure 
        const result = await service.executeQuery(`UPDATE product SET product_name=\'${product.product_name}\', support_contact_email=\'${product.support_contact_email}\' WHERE id=${product.id}`);
        logger.info(result);
        res.send(result);
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}