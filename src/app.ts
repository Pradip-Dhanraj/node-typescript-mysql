import express from "express";
import config from "config";
import dotenv from "dotenv";
dotenv.config();
import logger from "./utils/logger";
import createServer from "./utils/server";
import { PingDBConnection } from "./utils/connect";
import path from "path";

const port = config.get<number>("port");

const app = createServer();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "web/views"));

app.listen(process.env.PORT || port, async () => {
    logger.info(`App is running at http://localhost:${port}`);
    PingDBConnection();
});