const express = require('express');

const rutas = express.Router();

rutas.get('/', (req,res)=>{
    // res.send("Saludos a la ruta GET")
    res.render("hola")
})

module.exports = rutas;