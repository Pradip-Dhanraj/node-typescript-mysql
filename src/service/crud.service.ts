import { MysqlError } from "mysql";
import { Logger } from "pino";
import connection from "../utils/connect";
import logger from "../utils/logger";

export default class CRUDService {
    log: Logger;
    constructor(logger: Logger) {
        this.log = logger;
    }
    async executeQuery(query: string) {
        return await new Promise<boolean>(async (resolve, reject) => {
            //const connection = await GetConnection();
            logger.debug(`connection status : ${connection?.config}`)
            connection?.query(query, (err: MysqlError | null, result, fields) => {
                if (err) {
                    logger.fatal(`connection query operation failed`)
                    reject(err);
                }
                else resolve(result);
            });
        });
    }

    async insertData(query: string, arg: any) {
        return await new Promise<boolean>(async (resolve, reject) => {
            connection?.query(query, arg, (err: MysqlError | null, result, fields) => {
                if (err) {
                    logger.fatal(`connection query operation failed`)
                    reject(err);
                }
                else resolve(result);
            });
        });
    }
}
