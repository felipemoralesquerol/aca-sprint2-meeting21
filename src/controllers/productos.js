// Importación de modelos
const productos = require('../models/productos');

exports.productosList = async function (req, res, next) {
    // TODO: Tomar datos del body
    //const filtro = {};
    const todos = await productos.find();
    console.log(todos);
    res.json(todos);
};

exports.productosCount = async function (req, res, next) {
    // TODO: Tomar datos del body
    //const filtro = {};
    const count = await productos.find().countDocuments();
    console.log(count);
    res.json({ cantidad: count });
};

exports.productosAdd = async function (req, res, next) {
    console.log(req.body);
    let producto = new productos(req.body);
    producto.save(); //es una promesa
    res.json(producto);
};

exports.productosDelete = async function (req, res, next) {
    //TODO: Controlar cuando se intenta borrar con un id "alterado"
    try {
        const cant = await productos.deleteOne({ _id: req.params.id }, (err, result) => {
            if (err) {
                return res.send(console.log(err.message));
            } else {
                if (result.deletedCount > 0) {
                    return res.json('OK: Se eliminaron ' + result.deletedCount + ' documentos');
                } else {
                    return res.status(404).json('Documento no encontrado');
                }
            }
        }
        );
    }
    catch (err) {
        console.log(err.message);
    }
};

