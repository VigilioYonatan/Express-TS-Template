import { Request, Response } from "express";
import { bcrypt } from "../helpers";
import { Usuario } from "../interfaces";
import UsuarioModel from "../models/UsuarioModel";

const showUsuarios = async (req: Request, res: Response) => {
    res.json(req.body);
};
const addUsuario = async (req: Request, res: Response) => {
    const newUsuario = new UsuarioModel(req.body as Usuario.AddUser);
    newUsuario.password = bcrypt.hashValue(newUsuario.password);
    await newUsuario.save();
    return res.json({ msg: newUsuario });
};

export { showUsuarios, addUsuario };
