'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leagueoflegendsSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    Nombre: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function (value) {
                const regex = /^[a-zA-Z]+$/; // Expresión regular para permitir solo letras
                return regex.test(value);
            },
            message: props => 'El nombre solo debe contener letras'
        }
    },
    Descripcion: {
        type: String,
        required: true
    },
    Curiosidad: {
        type: String,
        required: true
    },
    Region: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('LeagueOfLegends', leagueoflegendsSchema, 'leagueoflegends');
