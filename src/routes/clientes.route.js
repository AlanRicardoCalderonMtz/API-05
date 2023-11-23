//Conexión:
// Modelo -> Controlador -> Rutas -> Aplicación 
const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientes.controller');

// Definir las rutas
router.get('/', clientesController.obtenerTodosClientes);
router.get('/:id', clientesController.obtenerClientePorId);
router.post('/', clientesController.crearCliente);
router.put('/:id', clientesController.actualizarCliente);
router.delete('/:id', clientesController.eliminarCliente);

module.exports = router;