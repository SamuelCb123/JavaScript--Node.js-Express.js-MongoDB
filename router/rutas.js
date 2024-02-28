'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
 res.render('index', {titulo: "mi titulo dinamico"})

})

router.get('/contacto', (req,res)=>{
    res.render('contacto', {titulocontacto : "Estamos en contacto de manera dinamica"})
})
router.get('/crear', (req,res)=>{
    res.render('crear')
})
router.get('/detalle', (req,res)=>{
    res.render('detalle')
})



module.exports = router;