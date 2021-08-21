const { Schema, model } = require('mongoose');

// creamos un esquema
const PlatoSchema = new Schema({
    // this.codigo = codigo;
    // this.nombre = nombre;
    // this.descripcion = descripcion;
    codigo: {
        type: String, required: true
    },
    nombre: {
        type: String, required: false
    },
    descripcion: {
        type: String, required: false
    }
});


module.exports = model('Platos', PlatoSchema);