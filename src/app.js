// Importación de base de datos
const mongoose = require('./database/database');
const morgan = require('morgan');

require('dotenv').config();



// Importación de modelos
const Usuarios = require('./models/usuarios');
const Productos = require('./models/productos');

const productosRouter = require('./routes/productos');
const platosRouter = require('./routes/platos');


// Importaciones adicionales
const express = require('express');
const app = express();

// Settings
app.use(express.json());
app.use(morgan('combined'));

app.use('/productos', productosRouter);
app.use('/platos', platosRouter);

app.listen(process.env.EXPRESS_PORT, () => {
    console.log('Servicio iniciado en puerto ' + process.env.EXPRESS_PORT)
}
)



