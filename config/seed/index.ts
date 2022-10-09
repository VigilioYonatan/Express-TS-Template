import { Request, Response } from "express";
import { Enviroments } from "../env.config";
import { UsuarioModel } from "../../models";
import { usuarioSeed } from "./usuarioSeed";

const runSeed = async (_req: Request, res: Response) => {
    if (Enviroments.node_env === "production") {
        return res
            .status(401)
            .json({ msg: "No tienes acceso a este servicio" });
    }
    await UsuarioModel.deleteMany();
    await UsuarioModel.insertMany(usuarioSeed);

    res.json({ message: "Seed Procesado Correctamente" });
};

export { runSeed };
