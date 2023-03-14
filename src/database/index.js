const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const conection = new Sequelize(dbConfig);

module.exports = conection;
