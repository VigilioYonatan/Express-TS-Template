import mongoose from "mongoose";
import { Enviroments } from "./env.config";

const connectDb = async () => {
    try {
        await mongoose.connect(Enviroments.mongo_uri as string);
    } catch (error) {
        console.log(error);
    }
};

export { connectDb };
