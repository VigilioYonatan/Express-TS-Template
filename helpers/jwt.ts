import jwt from "jsonwebtoken";
import { Enviroments } from "../config";

const generarJWT = (value: string): string =>
    jwt.sign(value, Enviroments.jwt_key as string, {
        expiresIn: "30d",
    });

const verifyJWT = (value: string) =>
    jwt.verify(value, Enviroments.jwt_key as string);

export { generarJWT, verifyJWT };
