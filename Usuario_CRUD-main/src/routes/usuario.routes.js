import { Router } from "express";
import usuarioController from "../controller/usuario.controller.js";

const router = Router();

router.post("/usuarios", usuarioController.createUsuarioController);
router.get("/usuarios", usuarioController.findAllUsuarioController);
router.get("/usuarios/:id", usuarioController.findUsuarioByIdController);
router.put("/usuarios/:id", usuarioController.updateUsuarioController);

export default router;
