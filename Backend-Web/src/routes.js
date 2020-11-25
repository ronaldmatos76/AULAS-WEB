const express = require('express');
const routes = express.Router();
const userController = require('./controller/userController');

/**
 * GET: Buscar/listar uma informações no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 **/

/*
routes.get('/users', (req, res) => {
    const params = req.query;
    console.log(params)
    res.json({
        nome:"André",
        idade: "21",
        empresa: "Uesb"
    })
})

routes.post('/users:id', (req, res) => {
    const params = req.params;
    console.log(params)
    res.json(params)
})
*/

routes.get('/users', userController.list)
routes.get('/users/:id', userController.show)
routes.post('/users', userController.create)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)

module.exports = routes;