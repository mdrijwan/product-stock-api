import express from 'express';
const router = express.Router();
const productController = require('../api/controllers/productController');

router.get('/productList', productController.getAll);
router.get('/productList/stockList', productController.getStock);
router.post('/', productController.create);
router.get('/:productId', productController.getById);
router.put('/:productId', productController.updateById);
router.delete('/:productId', productController.deleteById);

module.exports = router;