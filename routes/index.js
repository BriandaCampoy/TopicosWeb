const express = require('express');
const rutas = express.Router();

//importar modelo de la base de datos

const Estud = require('../models/estudiante')

rutas.get('/', async (req,res)=>{
    // res.send("Saludos a la ruta GET")
    const listaEstudiantes = await Estud.find();
    console.log(listaEstudiantes);
    res.render("hola",{listaEstudiantes})
})

module.exports = rutas;