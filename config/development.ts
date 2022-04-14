import dotenv from "dotenv";
dotenv.config();

export default {
    port: process.env.PORT || 5000,
    username: process.env.DB_USERNAME || "sql6485621",
    pssword: process.env.DB_PASSWORD || "aNgKWHfDVg",
    database: process.env.DB_NAME || "sql6485621",
    host: process.env.DB_HOST || "sql6.freesqldatabase.com",
    dbPort: process.env.DB_PORT || "3306",
}