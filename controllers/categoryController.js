const Category = require('../models/CategoryModel');

class CategoryController {
  async create(req, res) {
    const { name ,slug } = req.body;
    const category = await Category.create({ name ,slug });

    return res.json(category);
  };

  async getAll(req, res) {
    const categories = await Category.findAll();

    return res.json(categories);
  }
};

module.exports = new CategoryController();