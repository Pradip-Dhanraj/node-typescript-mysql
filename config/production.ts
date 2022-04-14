import dotenv from "dotenv";
dotenv.config();

export default {
    port: process.env.PORT,
    username: process.env.USERNAME,
    pssword: process.env.PASSWORD,
    dbUrl: process.env.DB_CONNECTION,
}