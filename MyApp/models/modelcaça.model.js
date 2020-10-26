const mongoose = require('../database');
const Schema = mongoose.Schema;

let caçaSchema = new Schema({
    texto: {type:String},
    fonte: {type:String},
    Name: {type:String},
    data: {type:Date},
    especificacoes: {type:String}

})

module.exports = mongoose.model('caça', UsuarioSchema, 'caça');