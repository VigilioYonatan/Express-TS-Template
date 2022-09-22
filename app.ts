import express, { Application, Router } from "express";
import cors from "cors";
import { Enviroments } from "./config";
import { runSeed } from "./config/seed";
import { UsuarioRouters } from "./routers";

/* Starting Application */
const app: Application = express();
const router: Router = Router();

/* Middlewares */
app.use(express.json({}));
app.use(cors());

/* ROUTERS */
router.use("/usuario", UsuarioRouters);
// router.use("/productos", );
router.get("/seed", runSeed);

/* Router Api */
app.use("/api", router);

/* Running PORT */
const puerto = Enviroments.port;
app.listen(puerto, () => {
    console.log("Corriendo en el puerto: " + puerto);
});
