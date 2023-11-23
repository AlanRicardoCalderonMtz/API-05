const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Cliente = sequelize.define('Cliente', {
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
Cliente.sync()
    .then(() => {
        console.log('Tabla cliente creada o ya existente');
    })
    .catch((error) => {
        console.error('Error al crear la tabla Cliente:', error);
    });

module.exports = Cliente;





