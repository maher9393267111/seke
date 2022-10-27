

const Category = require('../models/CategoryModel');
const Product = require('../models/productModel')



class ProductController {
    async create(req, res) {
      try {
        // cat_id
        const { name, desc, price, inStock,  } = req.body;
        const Product = await Product.create({name, desc, price, inStock, });
  

        return res.json(Product);
      } catch (e) {
        console.log(e);
        console.log('ERROR MESSAGE=====>>' , e?.message)
      }
    };
  
    async getAll(req, res) {
      const { cat_id } = req.query;
  
      if (cat_id) {
        const products = await Product.findAll({
          where: { cat_id },
          include: [{
            model: Category,
            as: 'cat_id',
            required: true,
          }]
        });
  
        return res.json(products);
      }
  // if no category.query find all products
      const products = await Product.findAll({
        include: [{
        //   model: Category,
        //   as: 'cat_id',
        //   required: true
        association: "categories"
        }],
        order: [
          ['id', 'ASC']
        ]
      });
  
      return res.json(products);
    };
  };




module.exports = new ProductController();





//   async getOrder(req, res) {
//     try {
//       const { orderId } = req.params;

//       const order = await OrderModel.findOne({
//         where: {
//           id: orderId
//         },
//         include: [{
//           model: OrderDeviceModel,
//           as: 'orderItems',
//           required: true
//         }]
//       });

//       if (!order) {
//         res.status(400).send('Order with this track number wasn\'t found');
//       }

//       return res.json(order);
//     } catch (e) {
//       console.log(e);
//     }
//   };