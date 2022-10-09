import express, { Application, Router } from "express";
import cors from "cors";
import { connectDb, corsOptions, Enviroments } from "./config";
import { runSeed } from "./config/seed";
import { UsuarioRouters } from "./routers";
import mongoose from "mongoose";
import { errorHandler, logEvents, logger } from "./middlewares";

/* Starting Application */
const app: Application = express();
const router: Router = Router();

/* Middlewares */
connectDb();
app.use(logger);
app.use(express.json({}));
app.use(cors(corsOptions));

/* ROUTERS */
router.use("/usuario", UsuarioRouters);
// router.use("/productos", );
router.get("/seed", runSeed);

/* Router Api */
app.use("/api", router);

app.use(errorHandler);
/* Running PORT */
const puerto = Enviroments.port;
mongoose.connection.once("open", () => {
    console.log("Conectado en la base de datos");
    app.listen(puerto, () => {
        console.log("Corriendo en el puerto: " + puerto);
    });
});

mongoose.connection.on("error", (error) => {
    console.log(error);
    logEvents(
        `${error.no}: ${error.code}\t${error.syscall}\t${error.hostname}`,
        "mongoErrLog.log"
    );
});
