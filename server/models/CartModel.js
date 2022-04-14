const Sequelize = require("sequelize");
const sequelize = require('../index');

const Cart = sequelize.define("cart", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
    },
    crust: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    size: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    vegtoppings: {
        type: Sequelize.INTEGER,
        allowNull : false,
    },
    nonvegToppings: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Cart;