import { Request, Response } from "express";
import { string, z } from "zod";
import { Blog } from "../schema/blog.schema";
import CRUDService from "../service/crud.service";
import logger from "../utils/logger";
const service: CRUDService = new CRUDService(logger);

export async function createblogHandler(req: Request, res: Response) {
    try {
        const payload = req.body;
        const result = await service.insertData("INSERT INTO blog SET ?", payload);
        logger.info(result);
        res.send(result);
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}

export async function getblogsHandler(req: Request, res: Response) {
    try {
        const id: any = req.query.id;
        let sqlquery: string = "SELECT * from blog";
        if (id !== undefined) {
            sqlquery = `SELECT * from blog WHERE id=${id}`;
        }
        const result = await service.executeQuery(sqlquery);
        logger.info(result);
        res.send(result);
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}

export async function deleteblogHandler(req: Request, res: Response) {
    try {
        const id: string = `${req.query.id}`;
        const result = await service.executeQuery(`DELETE FROM blog WHERE id=${id}`);
        logger.info(result);
        res.send(result);
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}

export async function updateblogHandler(req: Request, res: Response) {
    try {
        var blog: Blog = req.body;
        //using remote database for testing - if using mysql server we can use procedure 
        const result = await service.executeQuery(`UPDATE blog SET blogtitle=\'${blog.blogtitle}\', email=\'${blog.email}\', blog=\'${blog.blog}\' WHERE id=${blog.id}`);
        logger.info(result);
        res.send(result);
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}