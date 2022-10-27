const { DataTypes } = require('sequelize');
const sequelize = require('../db/db-config');

const Category = sequelize.define('category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'categories',
  timestamps: false
});



    // Category.associate = function(models) {
    //     Category.hasMany(models.Product, {
    //         as: "categories",
    //         foreignKey: "cat_id",
    //         onDelete: 'CASCADE'
    //     });
    //   }



module.exports = Category;


// (async() => {
//   // any chnage in columns change it
//   // in datbase  hemen beklemeden 
//   await sequelize.sync({alter: true });
// })();

