const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432,
});

const getUsers = (request, response) => {
    pool.query('SELECT * FROM Usuario;', (error, results) => {
        if (error) {
            console.log(error);
            throw error;
        }
        response.status(200).json(results.rows);
    })
};

const createUser = (request, response) => {
    const { id, nombre, correo } = request.body;
    pool.query('INSERT INTO Usuario (id, nombre, correo) VALUES ($1, $2, $3);', [id, nombre, correo], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send('Usuario creado');
    });
};

module.exports = {
    getUsers,
    createUser,
};