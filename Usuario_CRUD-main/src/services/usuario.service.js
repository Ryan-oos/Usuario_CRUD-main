import UsuarioRepository from '../repositories/usuario.repository.js';

async function createUsuarioService(novoUsuario) {
    return await UsuarioRepository.createUsuarioRepository(novoUsuario);
}

async function findAllUsuarioService() {
    return await UsuarioRepository.findAllUsuarioRepository();
}

async function findUsuarioByIdService(id) {
    return await UsuarioRepository.findUsuarioByIdRepository(id);
}

async function updateUsuarioService(id, novoUsuario) {
    return await UsuarioRepository.updateUsuarioRepository(id, novoUsuario);
}

async function deleteUsuarioService(id) {
    return await UsuarioRepository.deleteUsuarioRepository(id);
}

export default {
    createUsuarioService,
    findAllUsuarioService,
    findUsuarioByIdService,
    updateUsuarioService
    ,deleteUsuarioService
};