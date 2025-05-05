const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const technologiesController = require('./src/controllers/technologiesController');
const aboutController = require('./src/controllers/aboutController');

route.get('/', homeController.homePage);
route.get('/tecnologias', technologiesController.show);
route.get('/sobre', aboutController.show);

module.exports = route;