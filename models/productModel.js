const { DataTypes } = require('sequelize');
const sequelize = require('../db/db-config');
const Category = require('./CategoryModel');


const Product = sequelize.define('product', {
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
  desc: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER(50),
    allowNull: false
  },
  inStock: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue:true
  },
  cat_id: {
    type: DataTypes.INTEGER,
    allowNull:true
    // references: {
    //     model: Category,
    //     key: 'id'
    // }
  }
}, {
  tableName: 'products',
  timestamps: false
});


// Product.associate = function(models) {
//     Product.belongsTo(models.Category, {
//         as: "categories",
//         foreignKey: "cat_id",
//         onDelete: 'CASCADE'
//     });
//   }




module.exports = Product;

// (async() => {
//     // any chnage in columns change it
//     // in datbase  hemen beklemeden 
//     await sequelize.sync({alter: true });
// })();