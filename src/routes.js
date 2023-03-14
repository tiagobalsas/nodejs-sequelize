const express = require('express');
const UserController = require('./contollers/UserController');

const routes = express.Router();

routes.get('/users', UserController.listAllUsers);
routes.post('/users', UserController.store);

module.exports = routes;
