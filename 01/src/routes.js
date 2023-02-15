const express = require('express');
const retornarObjetoEmpresa = require('./controllers/domain');

const routes = express();

routes.get('/empresas', retornarObjetoEmpresa);

module.exports = routes;