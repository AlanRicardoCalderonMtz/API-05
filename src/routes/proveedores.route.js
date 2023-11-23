//Conexión:
// Modelo -> Controlador -> Rutas -> Aplicación 
const express = require('express');
const router = express.Router();
const proveedoresController = require('../controllers/proveedores.controller');

// Definir las rutas
router.get('/', proveedoresController.obtenerTodosProveedores);
router.get('/:id', proveedoresController.obtenerProveedorPorId);
router.post('/', proveedoresController.crearProveedor);
router.put('/:id', proveedoresController.actualizarProveedor);
router.delete('/:id', proveedoresController.eliminarProveedor);

module.exports = router;