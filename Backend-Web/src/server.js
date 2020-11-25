const express = require('express');
const routes = require('./routes');
const cors =  require('cors');
const app = express();
/**
 * Parêmetros
 * Query: parâmentros nomeados enviados na rota
 * Route params: Parametros usados para identificar um recurso
 * Request body: corpo da requisição
**/

app.use(cors());

app.use(express.json);


app.use(routes);

app.listen(3001);