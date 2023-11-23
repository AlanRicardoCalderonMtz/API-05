//Establecer la conexion con un Dialecto = MySQL
const { Sequelize } = require('sequelize')
//Estas son para render.com
const db = process.env.MYSQLDATABASE || "tienda";
const user = process.env.MYSQLUSER || "root";
const password = process.env.MYSQLPASSWORD || "tienda";

//Instancia
const sequelize = new Sequelize('tienda', 'root', '', {
    host:'localhost',
    dialect:'mysql',
    port:'3306'
})

try {
    sequelize.authenticate();
    console.log("Conexión a la base de datos exitosa");
} catch (error) {
    console.error("No se pudo establecer la conexión", error);
}

//Para poder usar la instancia de la conexión esta conexión en los controladores 
module.exports=sequelize;


