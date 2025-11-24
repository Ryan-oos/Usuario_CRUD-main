import db from '../config/database.js';

db.run(`
    CREATE TABLE IF NOT EXISTS usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
        login TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        senha TEXT NOT NULL,
        foto TEXT
    )
`);

function createUsuarioRepository(novoUsuario) {
    return new Promise((resolve, reject) => {
        const { login, email, senha, foto } = novoUsuario;

        db.run(
            `INSERT INTO usuario (login, email, senha, foto) VALUES (?, ?, ?, ?)`,
            [login, email, senha, foto],
            function (error) {
                if (error) return reject(error);

                resolve({
                    id: this.lastID,
                    ...novoUsuario
                });
            }
        );
    });
}

function findUsuarioByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT id, login, email, senha, foto FROM usuario WHERE id = ?`,
            [id],
            (error, row) => {
                error ? reject(error) : resolve(row);
            }
        );
    });
}

function findAllUsuarioRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM usuario`,
            [],
            (error, rows) => {
                error ? reject(error) : resolve(rows);
            }
        );
    });
}

function updateUsuarioRepository(id, Usuario) {
    return new Promise((resolve, reject) => {
        const { login, email, senha, foto } = Usuario;

        db.run(
            `UPDATE usuario SET login = ?, email = ?, senha = ?, foto = ? WHERE id = ?`,
            [login, email, senha, foto, id],
            function (error) {
                if (error) return reject(error);

                resolve({ id, ...Usuario });
            }
        );
    });
}

export default {
    createUsuarioRepository,
    findUsuarioByIdRepository,
    findAllUsuarioRepository,
    updateUsuarioRepository
};