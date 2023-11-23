const Proveedor = require('../models/proveedores.model');

exports.obtenerTodosProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.findAll();
        if (proveedores.length === 0) {
            res.status(404).json({
                estado: 1,
                mensaje: "No se encontraron proveedores",
                proveedores: []
            });
        } else {
            res.status(200).json({
                estado: 1,
                mensaje: "Proveedores encontrados",
                proveedores: proveedores
            });
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido"
        });
    }
}

//Get - Obtener un proveedor por ID
exports.obtenerProveedorPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const proveedor = await Proveedor.findByPk(id);
        if (proveedor === null) {
            res.status(404).json({
                estado: 0,
                mensaje: "Proveedor no encontrado"
            });
        } else {
            res.status(200).json({
                estado: 1,
                mensaje: "Proveedor encontrado",
                proveedor: proveedor
            });
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido"
        });
    }
}

// Crear un proveedor
exports.crearProveedor = async (req, res) => {
    const { nombre, email, telefono } = req.body;
    try {
        if (nombre === undefined || email === undefined || telefono === undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Bad Request - Faltan parámetros"
            });
        } else {
            const proveedor = await Proveedor.create({ nombre: nombre, email: email, telefono: telefono });
            res.status(200).json({
                estado: 1,
                mensaje: "Proveedor creado correctamente",
                proveedor: proveedor
            });
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido"
        });
    }
}

// Actualizar un proveedor
exports.actualizarProveedor = async (req, res) => {
    const { id } = req.params;
    const { nombre, email, telefono } = req.body;
    try {
        const proveedor = await Proveedor.findByPk(id);
        if (proveedor === null) {
            res.status(404).json({
                estado: 0,
                mensaje: "Proveedor no encontrado"
            });
        } else {
            if (nombre === undefined || email === undefined || telefono === undefined) {
                res.status(400).json({
                    estado: 0,
                    mensaje: "Faltan parámetros"
                });
            } else {
                await proveedor.update({ nombre: nombre, email: email, telefono: telefono });
                res.status(200).json({
                    estado: 1,
                    mensaje: "Proveedor actualizado con éxito",
                    proveedor: proveedor
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

// Eliminar un proveedor
exports.eliminarProveedor = async (req, res) => {
    const { id } = req.params;
    try {
        const proveedor = await Proveedor.findByPk(id);
        if (proveedor === null) {
            res.status(404).json({
                estado: 0,
                mensaje: "Proveedor no encontrado"
            });
        } else {
            await proveedor.destroy();
            res.status(200).json({
                estado: 1,
                mensaje: "Proveedor eliminado con éxito"
            });
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido"
        });
    }
}








