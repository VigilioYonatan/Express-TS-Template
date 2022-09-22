import UsuarioRouter from "./UsuarioRouter";
import { Router } from "express";

const v2: Router = Router();
v2.use("/usuario", UsuarioRouter);
export default v2;
