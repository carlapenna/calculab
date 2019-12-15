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
            required: true
        },
        cubeta: {
            type: Number,
            required: true
        },
        coefAbsortividade: {
            type: Number,
            required: true
        },
        absorbancia: {
            type: String,
            required: true
        },
        padrao: {
            type: mongoose.ObjectId,
            ref: 'Padrao',
            required: false,
        }
    });

    return mongoose.model('Amostra', schema, 'amostra');

}