const uuid = require('uuid');
const path = require('path');
const { Device } = require('../models/models');
const ApiError = require('../error/ApiError');

class deviceController {
  async create(req, res, next) {
    const { name, price, brandId, typeId, info } = req.body;
    const { img } = req.files;
    let fileName = uuid.v4() + '.jpg';
    img.mv(path.resolve(__dirname, '..', 'static', fileName));

    try {
      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    const { brandId, typeId, limit = 9, page = 1 } = req.query;
    const offset = page * limit - limit;
    let devices;
    if (!brandId && !typeId) {
      // Return all devices
      try {
        devices = await Device.findAndCountAll({ limit, offset });
      } catch (error) {}
    }

    if (brandId && !typeId) {
      // Return filtered by brand
      try {
        devices = await Device.findAndCountAll({
          where: { brandId },
          limit,
          offset,
        });
      } catch (error) {}
    }

    if (!brandId && typeId) {
      // Return filtered by type
      try {
        devices = await Device.findAndCountAll({
          where: { typeId },
          limit,
          offset,
        });
      } catch (error) {}
    }

    if (brandId && typeId) {
      try {
        devices = await Device.findAndCountAll({
          where: { typeId, brandId },
          limit,
          offset,
        });
      } catch (error) {}
    }

    return res.json(devices);
  }

  async getOne(req, res) {}
}

module.exports = new deviceController();
