const Sequelize = require("sequelize");
const sequelize = require('../index');

const Ingredient = sequelize.define("ingredient", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
    },
    ingredientName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cost: {
        type: Sequelize.INTEGER,
        allowNull: false, 
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull : false,
    }
});

module.exports = Ingredient;