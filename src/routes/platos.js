const express = require('express');
const app = express();

const router = express.Router();

// Controllers
const platosController = require('../controllers/platos');

// platos
router.get('/', platosController.platosList);
router.get('/search/', platosController.platosListPorNombre);
router.get('/count', platosController.platosCount)
router.post('/', platosController.platosAdd);
router.delete('/:codigo', platosController.platosExistePorCodigo, platosController.platosDelete);
router.put('/:codigo', platosController.platosExistePorCodigo, platosController.platosUpdate);


module.exports = router;


