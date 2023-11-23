const Categoria = require('../models/categorias.model')

//Get - Todas las categorias (Asincrona - se va conectar a la base de datos )
//Todas las categorias -> SELECT * FROM categoria
exports.obtenerTodasCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll(); // es como un 'SELECT * FROM categoria'
        if (categorias.length === 0) {
            res.status(404).json({
                estado: 1,
                mensaje: "No se encontraron categorías",
                categorias: []
            });
        } else {
            res.status(200).json({
                estado: 1,
                mensaje: "Categorías Encontradas",
                categorias: categorias
            });
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido"
        });
    }
}

//Get - Una categoría por ID
exports.obtenerCategoriasPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const categoria = await Categoria.findByPk(id);
        if (categoria == null) {
            res.status(404).json({
                estado: 0,
                mensaje: "Categoría no encontrada"
            });
        } else {
            res.status(200).json({
                estado: 1,
                mensaje: "Categoria encontrada",
                categoria: categoria
            });
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrio un error desconocido"
        });
    }
}

//Crea una categoria
exports.crearCategoria = async (req, res) => {
    const { descripcion } = req.body;
    try {
        if (descripcion == undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Bad Request - Faltan parametros"
            });
        } else {
            const categoria = await Categoria.create({ descripcion: descripcion });
            res.status(200).json({
                estado: 1,
                mensaje: "Categoría creada correctamente",
                categoria: categoria
            })
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrio un error desconocido"
        })
    }
}

//Actualizar categoria 
exports.actualizarCategoria = async (req, res) => {
    const { id } = req.params;
    const { descripcion } = req.body;
    try {
        const categoria = await Categoria.findByPk(id);
        if (categoria === null) {
            res.status(404).json({
                estado: 0,
                mensaje: "Categoría no encontrada"
            });
        } else {
            if (descripcion === undefined) {
                res.status(400).json({
                    estado: 0,
                    mensaje: "Faltan parametros"
                });
            } else {
                await categoria.update({ descripcion: descripcion });
                res.status(200).json({
                    estado: 1,
                    mensaje: "Categoría actualizada con éxito",
                    categoria: categoria
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido"
        });
    }
}


//Eliminar Categoria
exports.eliminarCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        const categoria = await Categoria.findByPk(id);
        if (categoria === null) {
            res.status(404).json({
                estado: 0,
                mensaje: "Categoria no encontrada"
            });
        } else {
            await categoria.destroy();
            res.status(200).json({
                estado: 1,
                mensaje: "Categoria eliminada con exito"
            });
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrio un error desconocido"
        })
    }
}