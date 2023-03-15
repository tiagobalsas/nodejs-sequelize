const express = require('express');
const UserController = require('./contollers/UserController');
const AddressController = require('./contollers/AddressController');

const routes = express.Router();

routes.get('/users', UserController.listAllUsers);
routes.post('/users', UserController.store);

routes.post('/users/:user_id/addresses', AddressController.store);

module.exports = routes;
