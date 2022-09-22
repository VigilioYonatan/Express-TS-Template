import mongoose from "mongoose";
import { Usuario } from "../interfaces";

const usuarioSchema = new mongoose.Schema<Usuario.Usuario>({
    nombre: {
        type: String,
        trim: true,
        required: true,
    },
    correo: {
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
    },
    foto: [{ type: String }],
});

const UsuarioModel = mongoose.model<Usuario.Usuario>("Usuario", usuarioSchema);
export default UsuarioModel;
