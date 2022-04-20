const Sequelize = require("sequelize");
const sequelize = require('../index');

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    password: {
        type: Sequelize.STRING,
        allowNull : false,
    }
});

module.exports = User;