var contador = 0;
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'postgres',
    password: '1234',
    port: 5432,
});

const getUsers = (request, response) => {
    pool.query('SELECT * FROM Usuario;', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
};

const getTweets = (request, response) => {
    //console.log(request.params.id);
    pool.query('SELECT contenido FROM Tweet WHERE id_usuario = \'' + request.params.id + '\';', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
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

const twitear = (request, response) => {
    const { id, contenido } = request.body;
    pool.query('SELECT id FROM Usuario where id = \'' + id + '\';', (error, results) => {
        if (results.rows == 0) {
            console.log('El usuario no existe');
            var nombre = 'usuario_auto' + contador;
            contador++;
            pool.query('INSERT INTO Usuario (id, nombre) VALUES ($1, $2);', [id, nombre], (error, results) => {
                if (error) {
                    console.log("Hubo un error al crear el usuario");
                    return;
                }
            });
        }   
        pool.query('INSERT INTO Tweet (id_usuario, contenido) VALUES ($1, $2);', [id, contenido], (error, results) => {
            if (error) {
                console.log("Hubo un error al crear el usuario");
                    return;
            }
            response.status(201).send('Tweet publicado!');
        }); 
    });

};

module.exports = {
    getUsers,
    getTweets,
    createUser,
    twitear
};