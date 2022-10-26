const sequelize = require('./db-config');
require('./assotiations');

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('DB was connected')

    await sequelize.sync({ force: true });  // force to recreate Tables 
    console.log('All models were synchronized successfully');
  } catch (e) {
    console.log(e);
  }
};


module.exports = connectDB;