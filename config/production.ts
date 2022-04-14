import dotenv from "dotenv";
dotenv.config();

export default {
    port: process.env.PORT,
    username: process.env.DB_USERNAME,
    pssword: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
}