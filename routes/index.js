const express = require('express');
const { required } = require('nodemon/lib/config');
const router = express.Router();
const { Player } = require('../models/player');



//Traer Jugadores
router.get('/api/players', (req, res ) =>{
    Player.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    })
});

//Guardar Jugadores
router.post('/api/player/add', (req, res) =>{
    const pla = new Player({
        name:req.body.name,
        country:req.body.country,
        team:req.body.team
    });
    pla.save((err, data) =>{
        res.status(200).json({ code:200, message:'Jugador agregado correctamente', 
        addPlayer:data})
    });
});

//Traer un Jugador
router.get('/api/player/:id', (req, res) =>{
    Player.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

//Actualizar jugador
router.put('/api/player/edit/:id', (req, res) =>{
    const pla = {
        name:req.body.name,
        country:req.body.country,
        team:req.body.team
    };
    Player.findByIdAndUpdate(req.params.id, { $set:pla }, {new:true}, (err, data) =>{
        if(!err) {
            res.status(200).json({ code:200, message: 'Jugador actualizado correctamente', 
            updatePlayer: data })
        } else {
            console.log(err);
        }
    });
});


// Borrar jugador
router.delete('/api/player/:id', (req, res) =>{
    Player.findByIdAndRemove(req.params.id, (err, data) =>{
        if(!err) {
            res.status(200).json({ code:200, message: 'Jugador eliminado correctamente', 
            deletePlayer: data});
        }
    });
});



module.exports = router;
