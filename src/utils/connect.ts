import config from "config";
import mysql, { Connection, MysqlError } from "mysql"
import logger from "../utils/logger";

const configuration: mysql.ConnectionConfig = {
    host: config.get<string>("host"),
    user: config.get<string>("username"),
    password: config.get<string>("pssword"),
    database: config.get<string>("database"),
    port: config.get<number>("dbPort"),
}

export function PingDBConnection() {
    mysql.createConnection(configuration).ping((err: MysqlError, ...args: any[]) => {
        if (!err) {
            logger.info('connection tested with ping');
        } else {
            logger.error(err.message);
        }
    });
}

const connection = mysql.createPool(configuration);
export default connection;
