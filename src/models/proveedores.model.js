const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Proveedor = sequelize.define('Proveedor', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Crea la tabla si no existe, si ya existe no hace nada
Proveedor.sync()
    .then(() => {
        console.log('Tabla proveedor creada o ya existente');
    })
    .catch((error) => {
        console.error('Error al crear la tabla Proveedor:', error);
    });

module.exports = Proveedor;






