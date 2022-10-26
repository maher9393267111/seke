const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2');
require('dotenv').config();


const option = {
  host: "mysql-93288-0.cloudclusters.net",
  //"sql11.freesqldatabase.com",
  dialect: "mysql",
  port: 10016,
//   pool: {
//     max: 30,
//     min: 0,
//   },
};

const databaseName = "myFIRST";
const databaseUsername = "admin";
const databasePassword = "xC8D2L3M";




// const sequelize = new Sequelize(databaseName, databaseUsername, databasePassword, {
// option
// });
  
const sequelize = new Sequelize(
  databaseName,
  databaseUsername,
  databasePassword,
  option
);

module.exports = sequelize;