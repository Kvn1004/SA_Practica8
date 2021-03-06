const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80;
const db = require('./queries');
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({ info: 'Practica 8, Software Avanzado' });
});

app.get('/usuarios', db.getUsers);
app.post('/usuarios', db.createUser);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});