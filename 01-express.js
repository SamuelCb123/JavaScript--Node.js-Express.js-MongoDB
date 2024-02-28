"use strict";

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 

require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

app.use('/', require('./router/rutas'));
app.use('/leagueoflegends', require('./router/leagueoflegends'));

app.use((req, res) => {
    res.status(404).render('404', {
        titulo: "Error 404",
        description: "Page Not Found"
    });
});

const user = 'Samuel';
const password = 'buba12345678';
const dbname = 'leagueoflegends';
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@samuel.0srh00s.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Base de datos conectada');
        app.listen(process.env.PORT || 3000, () => {
            console.log('Iniciando express en el puerto ' + (process.env.PORT || 3000));
        });
    })
    .catch(e => console.log(e));
