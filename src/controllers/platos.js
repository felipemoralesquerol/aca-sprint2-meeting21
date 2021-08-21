// Importación de modelos
const platos = require('../models/platos');

exports.platosList = async function (req, res, next) {
    const todos = await platos.find();
    console.log(todos);
    res.json(todos);
};

exports.platosListPorNombre = async function (req, res, next) {
    console.log(req.query);

    //Busqueda estricta (por coincidencia total)
    //const filtrado = await platos.find(req.query);

    //Busqueda con inclusión (en cualquier parte del nombre) Fuente: https://masteringjs.io/tutorials/mongoose/find-like
    const filtrado = await platos.find({ nombre: { $regex: req.query.nombre } });

    console.log(filtrado);
    res.json(filtrado);
};




exports.platosCount = async function (req, res, next) {
    // TODO: Tomar datos del body
    //const filtro = {};
    const count = await platos.find().countDocuments();
    console.log(count);
    res.json({ cantidad: count });
};

exports.platosAdd = async function (req, res, next) {
    console.log(req.body);
    let producto = new platos(req.body);
    producto.save(); //es una promesa
    res.json(producto);
};

exports.platosDelete = async function (req, res, next) {
    //TODO: Controlar cuando se intenta borrar con un id "alterado"
    try {
        const cant = await platos.deleteOne({ _id: req.params.id }, (err, result) => {
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

exports.platosUpdate = async function (req, res, next) {
    //TODO: Controlar cuando se intenta borrar con un id "alterado"
    try {
        const cant = await platos.updateOne({ _id: req.params.id }, req.body, (err, result) => {
            if (err) {
                return res.send(console.log(err.message));
            } else {
                console.log(result)
                return res.json('OK: Se actualizaron ' + result.deletedCount + ' documentos');
            };
        }
        );
    }
    catch (err) {
        console.log(err.message);
    }
};
