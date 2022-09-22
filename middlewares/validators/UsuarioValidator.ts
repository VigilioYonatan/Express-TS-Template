import { db } from "../../config";
import { Usuario } from "../../interfaces";
import { UsuarioModel } from "../../models";
import { validar, expressValidationTyped } from "./";

const validarAddUsuario = expressValidationTyped<keyof Usuario.AddUser>();
const campoValidosAddUser: Array<keyof Usuario.AddUser> = [
    "nombre",
    "correo",
    "password",
];
/* Validar AddUsuario */
const validarCamposAddUsuario = [
    validarAddUsuario.body("nombre", "Este campo es obligatorio").notEmpty(),
    validarAddUsuario.body("correo", "Este campo es obligatorio").notEmpty(),
    validarAddUsuario
        .body("correo")
        .custom((val: string) => existeUsuarioCorreo(val)),
    validarAddUsuario.body("password", "Este campo es obligatorio").notEmpty(),
    validar,
];

// Existe Usuario Con el Correo
const existeUsuarioCorreo = async (val: string) => {
    await db.connect();
    const usuario = await UsuarioModel.findOne({ correo: val });
    await db.disconnect();

    if (usuario) {
        throw new Error("Este correo Electrónico ya existe ");
    }
    return true;
};
export { campoValidosAddUser,validarCamposAddUsuario };
