const initModels = require('../models/init-models.js')
const connection = require('../../config/db.js')
const tables = initModels(connection);


function hello(req, res) {
    res.send("Hola");
}

async function inventory(req, res) {
    let query = await tables.product.findAll()
    res.json(query)
}

async function productRegister(req, res) {
    let query = await tables.product.create(req.body)
    res.json(query)
}

async function deleteProduct(req, res) {
    let id = req.params.id
    let query = await tables.product.destroy({
        where: {
            product_id: id
        }
    });
    res.json(query)
}

module.exports = {
    hello,
    inventory,
    productRegister,
    deleteProduct
}