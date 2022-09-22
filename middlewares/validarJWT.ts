import { NextFunction, Request, Response } from "express";

import { UsuarioModel } from "../models";
import { jwt } from "../helpers";

const validarJWT = async (req: Request, res: Response, next: NextFunction) => {
    let token;
    const authorization = req.headers.authorization;
    if (authorization && authorization.startsWith("Bearer")) {
        token = authorization.split(" ")[1];
        try {
            // const { _id } = jwt.verifyJWT(token) as ;
            // req.usuario = await UsuarioModel.findById(_id)
            //     .lean()
            //     .select("_id nick role foto");
        } catch (error) {
            res.status(404).json({ msg: error });
        }
    }
    if (!token) {
        const error = new Error("No se encontró ningun token");
        res.status(404).json({ msg: error });
    }
    // console.log(req.headers.authorization);
    next();
};

export { validarJWT };
