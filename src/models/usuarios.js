const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// creamos un esquema
const UsuarioSchema = new Schema({
    // this.username = username;
    // this.nombre = nombre;
    // this.apellido = apellido;
    // this.email = email;
    // this.password = password;
    // this.telefono = telefono;
    // this.direccionEnvio = direccionEnvio;
    // //Si no viene el parametro admin se asume falso (no administrador)
    // this.admin = admin === undefined ? false : admin;
    // this.borrado = false;
    username: {
        type: String, required: true
    },
    nombre: {
        type: String, required: false
    },
    apellido: {
        type: String, required: false
    },
    email: {
        type: String, required: false
    },
    password: {
        type: String, required: false
    },
    telefono: {
        type: String, required: false
    },
    admin: {
        type: Boolean, required: false
    },
    borrado: {
        type: Boolean, required: false
    }
}, {
    // Agregado fechas de auditoria en el schema  
    timestamps: true
});

// Encripta la contraseña para aseguraramiento de la misma
UsuarioSchema.methods.encriptarPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    const passwordEncriptada = await bcrypt.hash(password, salt);
    console.log(passwordEncriptada);
    return passwordEncriptada;
};

// Desencripta la contraseña (para usar this tengo que usar una funcion clásica)
UsuarioSchema.methods.validaPassword = async function (password) {
    return await bcript.compare(password, this.password);
}

module.exports = model('Usuarios', UsuarioSchema);