import { bcrypt } from "../../helpers";
import { Usuario } from "../../interfaces";

const usuarioSeed: Usuario.Usuario[] = [
    {
        nombre: "Yonatan",
        correo: "yonatanvigiliolavado09@gmail.com",
        password: bcrypt.hashValue("123456"),
        foto: ["image1.png"],
    },
    {
        nombre: "Elmer",
        correo: "elmervigiliolavado09@gmail.com",
        password: bcrypt.hashValue("123456"),
        foto: ["image2.png"],
    },
];

export { usuarioSeed };
