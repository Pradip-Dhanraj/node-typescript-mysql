import { Express, Request, Response } from "express";
import { createProductHandler, getProductsHandler, deleteProductHandler, updateProductHandler } from "./controller/product.controller";
import { createDBHandler, createTableHandler } from "./controller/database.controller";
import validateMiddleware from "./middleware/zod.middleware";
import { dataSchema, updateProductSchema } from "./schema/product.schema";

function routes(app: Express) {

    //db handling
    //app.get("/db/createdb", createDBHandler); // removing as remote online sql hosting does not have previleges to create new database
    app.get("/db/createtable", createTableHandler);

    //to create product
    app.post("/api/product", validateMiddleware(dataSchema), createProductHandler);
    app.get("/api/product", getProductsHandler);
    app.delete("/api/product", deleteProductHandler);
    app.put("/api/product", validateMiddleware(updateProductSchema), updateProductHandler);

    //to test running environment
    app.get("/", (req: Request, res: Response) => {
        res.send(`App is running on ${process.env.NODE_ENV} environment`);
    });
}

export default routes;