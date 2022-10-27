const Category = require('../models/CategoryModel');
const Good = require('../models/GoodModel');
//const OrderModel = require('../models/OrderModel');
//const OrderDeviceModel = require('../models/OrderDeviceModel');
  const Product = require('../models/productModel')

//Category.hasMany(Good, { as: 'goods' });

// Category.hasMany(productModel, { as: 'products' });
// productModel.hasOne(Category,{as:'category'})

//Good.belongsTo(Category, { as: 'category' });

//OrderModel.hasMany(OrderDeviceModel, { as: 'orderItems' });
//OrderDeviceModel.belongsTo(OrderModel, { as: 'order' });


  // Categories have many Products
  Category.hasMany(Product, {
    // foreignKey: 'cat_id'
    as: "categories",
    foreignKey: "cat_id"
   });



// // Products belongsTo Category
Product.belongsTo(Category, {
   // foreignKey: 'cat_id',
    onDelete: 'SET NULL',
    as: "categories",
    foreignKey: "cat_id"
  });
  
