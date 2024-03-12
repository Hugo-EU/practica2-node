// routes/cantantesRoutes.js
const express = require('express');
const router = express.Router();
const cantanteController = require('../controllers/cantanteController');

// Rutas para los cantantes
router.get('/cantantes', cantanteController.getAllCantantes);
router.get('/cantantes/:id', cantanteController.getCantanteById);
router.post('/cantantes', cantanteController.createCantante);
router.put('/cantantes/:id', cantanteController.updateCantante);
router.delete('/cantantes/:id', cantanteController.deleteCantante);

module.exports = router;
