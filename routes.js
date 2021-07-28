const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const tecnologiasController = require('./src/controllers/tecnologiasController');

route.get('/', homeController.homePage);
route.get('/tecnologias', tecnologiasController.show);

module.exports = route;