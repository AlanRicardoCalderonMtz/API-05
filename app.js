const express = require('express');

//Requerimos...
const routsCategorias = require('./src/routes/categorias.route');
const routsClientes = require('./src/routes/clientes.route');
const routsProveedores = require('./src/routes/proveedores.route');


//Declaraciones
const app = express();
//Este puerto se verifica en google y Insomnia
const puerto = process.env.port || 3000;

//Configurción del servidor
app.use(express.json())
app.use('/socios/v2/categorias', routsCategorias); 
app.use('/socios/v2/clientes', routsClientes);
app.use('/socios/v2/proveedores', routsProveedores);

//Ejecutar el servidor
app.listen(puerto, () => {
console.log("Servidor escuchando en el puerto:", puerto);
}); 