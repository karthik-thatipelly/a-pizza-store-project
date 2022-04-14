//Making server online

const express = require("express");
const PORT= process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get('/', (req,res) => res.send('The Pizza Store is online'));

//Connecting to database

const Sequelize = require('sequelize');
const sequelize = new Sequelize('pizzastore','postgres','postgres',{
dialect: 'postgres',
host:'localhost',
port:5425
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize;