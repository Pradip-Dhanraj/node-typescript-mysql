import { Express, Request, Response } from "express";
import { createblogHandler, getblogsHandler, deleteblogHandler, updateblogHandler } from "./controller/blog.controller";
import { createDBHandler, createTableHandler } from "./controller/database.controller";
import validateMiddleware from "./middleware/zod.middleware";
import { blogSchema } from "./schema/blog.schema";
import { blogHandler } from "./controller/view.controller";

function routes(app: Express) {

    //db handling
    //app.get("/db/createdb", createDBHandler); // removing as remote online sql hosting does not have previleges to create new database
    app.get("/db/createtable", createTableHandler);

    //to create product
    app.post("/api/blog", validateMiddleware(blogSchema), createblogHandler);
    app.get("/api/blog", getblogsHandler);
    app.delete("/api/blog", deleteblogHandler);
    app.put("/api/blog", validateMiddleware(blogSchema), updateblogHandler);

    //to test running environment
    app.get("/", (req: Request, res: Response) => {
        res.send(`App is running on ${process.env.NODE_ENV} environment`);
    });

}

export default routes;