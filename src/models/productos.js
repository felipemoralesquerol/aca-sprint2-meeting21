const { Schema, model } = require('mongoose');

// creamos un esquema
const ProductoSchema = new Schema({
    // this.codigo = codigo;
    // this.nombre = nombre;
    // this.descripcion = descripcion;
    // this.precioVenta = precioVenta;
    // this.stock = stock;
    // this.foto = undefined;
    // this.borrado = false;
    codigo: {
        type: String, required: true
    },
    nombre: {
        type: String, required: false
    },
    descripcion: {
        type: String, required: false
    },
    precioVenta: {
        type: Number, required: false
    },
    stock: {
        type: Number, required: false
    },
    borrado: {
        type: Boolean, required: false
    }
}, {
    // Agregado fechas de auditoria en el schema  
    timestamps: true
});


module.exports = model('Productos', ProductoSchema);