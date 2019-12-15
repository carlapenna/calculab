const mongoose = require('mongoose');

module.exports = function () {

    const schema = mongoose.Schema({
        identificacao: {
            type: String,
            required: true
        },
        equipamento: {
            type: mongoose.ObjectId,
            ref: 'Equipamento',
            required: true
        },
        compriOnda: {
            type: Number,
            required: true,
        },
        cubeta: {
            type: Number,
            required: true,
        },
        coefAbsortividade: {
            type: Number,
            required: false,
        },
        diluicaoP: {
            type: String,
            required: true,
        },
        absorbanciaP: {
            type: String,
            required: true,
        }
    });

    return mongoose.model('Padrao', schema, 'padrao');

}