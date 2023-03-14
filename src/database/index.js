const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');

const conection = new Sequelize(dbConfig);

User.init(conection);

module.exports = conection;
