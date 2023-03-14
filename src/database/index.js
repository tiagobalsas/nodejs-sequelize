const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Addresses = require('../models/Addresses');

const conection = new Sequelize(dbConfig);

User.init(conection);
Addresses.init(conection);

module.exports = conection;
