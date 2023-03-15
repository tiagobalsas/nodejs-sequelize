const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');

const conection = new Sequelize(dbConfig);

User.init(conection);
Address.init(conection);

Address.associate(conection.models)

module.exports = conection;
