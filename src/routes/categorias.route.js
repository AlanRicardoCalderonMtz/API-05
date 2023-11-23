//Conexión:
// Modelo -> Controlador -> Rutas -> Aplicación 

const express = require('express')
const router = express.Router()
const categoriasController = require('../controllers/categorias.controller')

//Definir las rutas
router.get('/', categoriasController.obtenerTodasCategorias);
router.get('/:id', categoriasController.obtenerCategoriasPorId);
router.post('/', categoriasController.crearCategoria);
router.put('/:id', categoriasController.actualizarCategoria);
router.delete('/:id', categoriasController.eliminarCategoria);

module.exports=router;