const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); //? Esta ya la tenemos establecida

const Categoria = sequelize.define('Categoria',{
    //Mapear 
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

//Crea la tabla si no existe, si ya existe no hace nada
Categoria.sync()
.then(()=>{
    console.log('Tabla categoria creada o ya existente');
})
.catch((error)=>{
    console.error('Error al crear la tabla Categoria:', error);
})

module.exports=Categoria;