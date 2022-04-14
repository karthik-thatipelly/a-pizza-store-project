const Sequelize = require("sequelize");
const sequelize = require('../index');

const Order = sequelize.define("order", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    orderedItems: {
        type: Sequelize.STRING,
        allowNull : false,
    }
});

module.exports = Order;