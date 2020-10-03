const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({ info: 'Practica 8, Software Avanzado' })
});

app.get('/usuarios', db.getUsers);
app.post('/usuarios', db.createUser);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});