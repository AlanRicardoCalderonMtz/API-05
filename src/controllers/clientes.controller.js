const Cliente = require('../models/clientes.model');

// Obtener todos los clientes (Asincrona - se va conectar a la base de datos )
//Todas los clientes -> SELECT * FROM categoria
exports.obtenerTodosClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        if (clientes.length === 0) {
            res.status(404).json({
                estado: 1,
                mensaje: "No se encontraron clientes",
                clientes: []
            });
        } else {
            res.status(200).json({
                estado: 1,
                mensaje: "Clientes encontrados",
                clientes: clientes
            });
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido"
        });
    }  
}

//Get - Obtener un cliente por ID
exports.obtenerClientePorId = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findByPk(id);
        if (cliente === null) {
            res.status(404).json({
                estado: 0,
                mensaje: "Cliente no encontrado"
            });
        } else {
            res.status(200).json({
                estado: 1,
                mensaje: "Cliente encontrado",
                cliente: cliente
            });
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido"
        });
    }
}

// Crear un cliente
exports.crearCliente = async (req, res) => {
    const { nombre, email, telefono } = req.body;
    try {
        if (nombre === undefined || email === undefined || telefono === undefined) {
            res.status(400).json({
                estado: 0,
                mensaje: "Bad Request - Faltan parámetros"
            });
        } else {
            const cliente = await Cliente.create({ nombre:nombre, email:email, telefono:telefono });
            res.status(200).json({
                estado: 1,
                mensaje: "Cliente creado correctamente",
                cliente: cliente
            });
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido"
        });
    }
}

// Actualizar un cliente
exports.actualizarCliente = async (req, res) => {
    const { id } = req.params;
    const { nombre, email, telefono } = req.body;
    try {
        const cliente = await Cliente.findByPk(id);
        if (cliente === null) {
            res.status(404).json({
                estado: 0,
                mensaje: "Cliente no encontrado"
            });
        } else {
            if (nombre === undefined || email === undefined || telefono === undefined) {
                res.status(400).json({
                    estado: 0,
                    mensaje: "Faltan parámetros"
                });
            } else {
                await cliente.update({ nombre:nombre, email:email, telefono:telefono });
                res.status(200).json({
                    estado: 1,
                    mensaje: "Cliente actualizado con éxito",
                    cliente: cliente
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

// Eliminar un cliente
exports.eliminarCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findByPk(id);
        if (cliente === null) {
            res.status(404).json({
                estado: 0,
                mensaje: "Cliente no encontrado"
            });
        } else {
            await cliente.destroy();
            res.status(200).json({
                estado: 1,
                mensaje: "Cliente eliminado con éxito"
            });
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido"
        });
    }
}


