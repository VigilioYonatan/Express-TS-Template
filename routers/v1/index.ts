import { Router } from "express";
import { runSeed } from "../../config/seed";
import UsuarioRouter from "./UsuarioRouter";

const v1: Router = Router();

v1.use("/usuario", UsuarioRouter);
v1.get("/seed", runSeed);
export default v1;
