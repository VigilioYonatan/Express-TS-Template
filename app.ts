import express, { Application } from "express";
import cors from "cors";
import { Enviroments } from "./config";
import { v1, v2 } from "./routers";

/* Starting Application */
const app: Application = express();


/* Middlewares */
app.use(express.json({}));
app.use(cors());

/* Routera Api */
app.use("/api/v1", v1.default);
app.use("/api/v2", v2.default);

/* Running PORT */
const puerto = Enviroments.port;
app.listen(puerto, () => {
    console.log("Corriendo en el puerto: " + puerto);
});
