'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leagueoflegendsSchema = new Schema({
    id: { type: String, unique: true },
    Nombre: { type: String, unique: true },
    Descripcion: String,
    Curiosidad: String,
    Region: String
});

module.exports = mongoose.model('leagueoflegends', leagueoflegendsSchema, 'leagueoflegends');
