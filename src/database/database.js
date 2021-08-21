require('dotenv').config();
const mongoose = require('mongoose');


//const MONGODB_URI = 'mongodb://localhost/aca-s2-m21';
const MONGODB_URI = process.env.MONGODB_HOST + ':' + process.env.MONGODB_PORT + '/' + process.env.MONGODB_DB_NAME
console.log(MONGODB_URI)
// TODO: Modularizar
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(db => console.log('Base de datos conectada!'))
    .catch(err => console.log('Error: ' + err));

module.exports = mongoose