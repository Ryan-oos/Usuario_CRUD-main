import UsuarioService from '../services/usuario.service.js';

async function createUsuarioController(req, res) {
    const novoUsuario = req.body;

    try {
        const usuario = await UsuarioService.createUsuarioService(novoUsuario);
        res.status(201).send(usuario);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function findAllUsuarioController(req, res) {
    try {
        const usuarios = await UsuarioService.findAllUsuarioService();
        res.status(200).send(usuarios);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

async function findUsuarioByIdController(req, res) {
    const { id } = req.params;

    try {
        const usuario = await UsuarioService.findUsuarioByIdService(id);
        res.status(200).send(usuario);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

async function updateUsuarioController(req, res) {
    const { id } = req.params;
    const novoUsuario = req.body;

    try {
        const usuarioAtualizado = await UsuarioService.updateUsuarioService(id, novoUsuario);
        res.status(200).send(usuarioAtualizado);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function deleteUsuarioController(req, res) {
    const { id } = req.params;

    try {
        await UsuarioService.deleteUsuarioService(id);
        // 204 No Content is common for successful deletes
        res.status(204).send();
    } catch (error) {
        // If not found, return 404, otherwise 400
        if (error && error.message && error.message.includes('não encontrado')) {
            res.status(404).send(error.message);
        } else {
            res.status(400).send(error.message);
        }
    }
}

export default {
    createUsuarioController,
    findAllUsuarioController,
    findUsuarioByIdController,
    updateUsuarioController
    ,deleteUsuarioController
};