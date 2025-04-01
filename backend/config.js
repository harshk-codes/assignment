import dotenv from "dotenv";
dotenv.config();

export default {
    jwtSecret: process.env.JWT_SECRET,
    mongoUrl: process.env.MONGO_URL,
}