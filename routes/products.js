const {Router} = require('express')
const router = Router()
const { productsController } = require('../controller.router/products.controller')

router.get('/products', productsController.getProducts)

router.get('/products/:id', productsController.getProductsId)
router.post('/products', productsController.postProducts)

router.delete('/products/:id', productsController.deleteProducts)

module.exports = router
