import mongoose from "mongoose";
import { Enviroments } from "./env.config";

/* 
    0 = disconnected
    1 = connected
    2 = connecting
    3 = disconnecting

*/
const mongoConnection = {
    isConnected: 0,
};

export const connect = async () => {
    if (mongoConnection.isConnected === 1) {
        console.log("Ya estabamos conectado");
        return;
    }
    if (mongoose.connections.length > 0) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;
        if (mongoConnection.isConnected === 1) {
            console.log("Usando conexion anterior");
        }

        await mongoose.disconnect();
    }

    await mongoose.connect(Enviroments.mongo_uri as string);
    mongoConnection.isConnected = 1;
    console.log("Conectando a MongoDb: ", Enviroments.mongo_uri);
};

export const disconnect = async () => {
    if (Enviroments.node_env !== "production") return;
    if (mongoConnection.isConnected === 0) return;
    await mongoose.disconnect();
    console.log("Desconectado de mongoDB");
};
