const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Pedidos = require('../models/Pedidos');

const connection = new Sequelize(dbConfig);

Pedidos.init(connection);

module.exports = connection;