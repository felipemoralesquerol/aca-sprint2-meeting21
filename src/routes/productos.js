const express = require('express');
const app = express();

const router = express.Router();

// Controllers
const productosController = require('../controllers/productos');


// productos
router.get('/', productosController.productosList);
router.get('/count', productosController.productosCount)
router.post('/', productosController.productosAdd);
router.delete('/:id', productosController.productosDelete);


module.exports = router;


