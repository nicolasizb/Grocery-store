const { Router } = require('express')
const { hello, inventory, productRegister, deleteProduct } = require('../controllers/controller.js')

const router = Router();

router.get('/hello', hello)
router.get('/inventory', inventory)
router.post('/product', productRegister)
router.delete('/delete-product/:id', deleteProduct)

module.exports = router