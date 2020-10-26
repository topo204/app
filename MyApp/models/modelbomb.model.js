const mongoose = require('../database');
const Schema = mongoose.Schema;

let bombardeiroSchema = new Schema({
    texto: {type:String},
    fonte: {type:String},
    Name: {type:String},
    data: {type:Date},
    especificacoes: {type:String}

})

module.exports = mongoose.model('bomber', UsuarioSchema, 'bomber');