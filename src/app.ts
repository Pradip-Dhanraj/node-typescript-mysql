import express from "express";
import config from "config";
import dotenv from "dotenv";
dotenv.config();
import logger from "./utils/logger";
import createServer from "./utils/server";
import { PingDBConnection } from "./utils/connect";

const port = config.get<number>("port");

const app = createServer();

app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);
    PingDBConnection();
});