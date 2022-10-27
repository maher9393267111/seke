const router = require('express').Router();
const categoryController = require('../controllers/categoryController');
const goodController = require('../controllers/goodController');
const orderController = require('../controllers/orderController');
const ProductController = require('../controllers/productController')
const BrandController = require('../controllers/brandContoller')
const TypeController = require('../controllers/typeController');
const DeviceController = require('../controllers/deviceController')


const { Type } = require('../models/all');

router.post('/categories', categoryController.create);
router.post('/goods', goodController.create);
router.get('/categories', categoryController.getAll);
router.get('/goods', goodController.getAll);

router.post('/orders', orderController.checkout);
router.get('/orders/:orderId', orderController.getOrder);

router.get('/products', ProductController.getAll);
router.post('/products', ProductController.create);


router.get('/brands', BrandController.getAll);
router.post('/brands', BrandController.create);

// Type
router.get('/types', TypeController.getAll);
router.post('/types', TypeController.create);

// Device
router.get('/devices', DeviceController.getAll);
router.post('/devices', DeviceController.create);
router.get('/devices/:id', DeviceController.getOne);




module.exports = router;