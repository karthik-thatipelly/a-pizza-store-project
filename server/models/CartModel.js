const Sequelize = require("sequelize");
const sequelize = require('../index');

const Cart = sequelize.define("cart", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    size: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    crust: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cheese: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    vegtoppings: {
        type: Sequelize.STRING,
        allowNull : true,
    },
    nonvegtoppings: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports = Cart;