import sqlite3 from 'sqlite3';
sqlite3.verbose();

const db = new sqlite3.Database('./src/database.db', (error) => {
    if (error) {
        console.error("Erro ao conectar no banco:", error);
    } else {
        console.log("Conectado com sucesso ao banco de dados SQLite.");
    }
});

export default db;