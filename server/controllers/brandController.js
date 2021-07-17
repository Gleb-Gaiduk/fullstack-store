const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
  async create(req, res) {
    try {
      const { title } = req.body;
      const brand = await Brand.create({ title });
      return res.json(brand);
    } catch (error) {
      return res.json(error.errors[0].message);
      console.log('This error from brandController.js', error);
    }
  }

  async getAll(req, res) {
    try {
      const brands = await Brand.findAll();
      return res.json(brands);
    } catch (error) {
      console.log('This error from brandController.js', error);
    }
  }
}

module.exports = new BrandController();
