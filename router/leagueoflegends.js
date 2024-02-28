const express = require('express');
const router = express.Router();
const Leagueoflegends = require('../models/leagueoflegends'); // Fix the model name here
const leagueoflegends = require('../models/leagueoflegends');
const { json } = require('body-parser');

router.get('/', async (req, res) => {
    try {
        const arrayleagueoflegendsDB = await Leagueoflegends.find(); // Fix the model name here
        console.log(arrayleagueoflegendsDB); 
        res.render("leagueoflegends", {
            arrayleagueoflegends: arrayleagueoflegendsDB
        });
    } catch (error) {
        console.log(error);
        res.render("leagueoflegends", {
            arrayleagueoflegends: [],
            error: true,
            mensaje: 'Error al obtener los personajes'
        });
    }
});

router.post('/', async (req,res)=> {
    const body = req.body
    console.log(body)
    try{
        const leagueoflegendsDB = new Leagueoflegends(body);
        await leagueoflegendsDB.save();
        res.redirect('/leagueoflegends');
    } catch(error){
        console.log('error', error);
    }
})


router.get('/:id', async(req,res)=> {
    const id = req.params.id
    try{
        const leagueoflegendsDB = await leagueoflegends.findOne({_id:id})
        console.log(leagueoflegendsDB)
        res.render('detalle', {
            leagueoflegends:leagueoflegendsDB,
            error:false
        })
    }catch (error){
        console.log('Se ha producido un error', error)
        res.render('detalle', {
            error:true,
            mensaje:'Campeon no encontrado'
        })
    }
})


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('_id desde backend', id);
    try {
        const leagueoflegendsDB = await leagueoflegends.findByIdAndDelete(id);
        console.log(leagueoflegendsDB);
        if (!leagueoflegendsDB) {
            res.json({
                estado: false,
                mensaje: 'No se puede eliminar el campeon'
            });
        } else {
            res.json({
                estado: true,
                mensaje: 'Campeon eliminado'
            });
        }
    } catch (error) {
        console.log(error);
       
    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id)
    console.log('body', body)
    
    // Filtrar solo los campos permitidos para la actualización
    const camposActualizables = {
        Nombre: body.Nombre,
        Descripcion: body.Descripcion,
        Curiosidad: body.Curiosidad,
        Region: body.Region
    };

    try {
        const leagueoflegendsDB = await Leagueoflegends.findByIdAndUpdate(
            id, camposActualizables, { useFindAndModify: false }
        );
        
        console.log(leagueoflegendsDB)
        res.json({
            estado: true,
            mensaje: 'campeon actualizado'
        })

    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problemas al editar el campeon'
        })
    }
})

module.exports = router;
