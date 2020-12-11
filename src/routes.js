const routes = require("express").Router();

const SessionController = require('./app/controllers/SessionController');

routes.post('/sessions', SessionController.store);

// Definição das rotas

module.exports = routes;