import { Request, Response } from "express";
import { bcrypt } from "../helpers";
import { Usuario } from "../interfaces";
import UsuarioModel from "../models/UsuarioModel";

/** -- snipet expressControllerTS
 *  @desc Get all users @access public
 *  @route /api/usuario @method  GET
 */
const showUsuarios = async (_req: Request, res: Response) => {
    const usuario = await UsuarioModel.create();
    res.status(200).json(usuario);
};
const addUsuario = async (req: Request, res: Response) => {
    const newUsuario = new UsuarioModel(req.body as Usuario.AddUser);
    newUsuario.password = bcrypt.hashValue(newUsuario.password);
    await newUsuario.save();
    return res.json({ msg: newUsuario });
};


export { showUsuarios, addUsuario };
