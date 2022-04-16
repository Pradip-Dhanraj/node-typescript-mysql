import { Request, Response } from "express";
import { string, z } from "zod";
import { Blog } from "../schema/blog.schema";
import CRUDService from "../service/crud.service";
import logger from "../utils/logger";
const service: CRUDService = new CRUDService(logger);

export async function blogHandler(req: Request, res: Response) {
    try {
        const id: any = req.query.id;
        let sqlquery: string = "SELECT * from blog";
        if (id !== undefined) {
            sqlquery = `SELECT * from blog WHERE id=${id}`;
        }
        const result = await service.executeQuery(sqlquery);
        logger.info(result);
        res.render("blog-list");
    } catch (error) {
        logger.error(error);
        res.send(error);
    }
}