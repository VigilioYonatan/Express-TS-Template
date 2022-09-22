import { Router } from "express";
import { UsuarioController } from "../../controllers";
import { Usuario } from "../../interfaces";
import { returnErrorCamposNoValidos } from "../../middlewares";
import {
    campoValidosAddUser,
    validarCamposAddUsuario,
} from "../../middlewares/validators";

const router: Router = Router();

router.get("/", UsuarioController.showUsuarios);

router.post(
    "/",
    returnErrorCamposNoValidos<Usuario.AddUser>(campoValidosAddUser),
    validarCamposAddUsuario,
    UsuarioController.addUsuario
);

export default router;
