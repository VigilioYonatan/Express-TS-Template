import dotenv from "dotenv";
dotenv.config({ path: ".env" });
const Enviroments = {
    port: process.env.PORT,
    mongo_uri: process.env.MONGO_URI,
    jwt_key: process.env.JWT_KEY,
    node_env: process.env.NODE_ENV,
};
export { Enviroments };
