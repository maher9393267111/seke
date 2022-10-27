const {Type, Device} = require('../models/all')
//const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll({include:Device})  // with all Devices show
        return res.json(types)
    }

}

module.exports = new TypeController()