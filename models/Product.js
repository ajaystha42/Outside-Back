const Sequelize = require('sequelize');
const sequelize = require('./../util/database');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    price: Sequelize.STRING
});

module.exports = Product;