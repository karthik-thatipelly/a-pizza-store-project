//Making server online

const express = require("express");
const PORT= process.env.PORT || 3001;
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

//app.get('/', (req,res) => res.send('The Pizza Store is online'));

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


  
//Tables


const User = require("./models/UsersModel");
//const Ingredient = require("./models/IngredientsModel");
//const Cart = require("./models/CartModel");
const Order = require("./models/OrdersModel");

User.hasMany(Order);
//User.hasOne(Cart);
//User.hasMany(Ingredient);
//Cart.hasMany(Ingredient);
//Cart.hasOne(Order);
//Order.hasMany(Ingredient);

sequelize 
  .sync({force:false})
  .then((result) => {
      console.log(result);
  })
  .catch((err) => {
      console.log(err)
  })

  
  //authentication routes
     //registration
  app.post('/register',(req,res) => {
    try{
    User.create({name:req.body.username, email: req.body.email,password:req.body.password})
    } catch(err) {
      console.log("something went wrong")
    }
  })
    
    //Login
  app.post('/login', (req,res) => {
    try{
     User.findAll({
       where: {name : req.body.username, password: req.body.password}
     })
       .then(result => {res.send(result)})
    } catch(err){
       res.send({err:err})
    }
  })
   