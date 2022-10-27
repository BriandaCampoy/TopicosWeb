const express = require('express');
const rutas = express.Router();

//importar modelo de la base de datos

const Estud = require('../models/estudiante')

/**Funcion middleware */

rutas.use((req,res,next)=>{
    if(req.query._method=='PUT'){
        req.method='PUT';
        req.url = req.path;
    }
    if(req.query._method=='DELETE'){
        req.method='DELETE';
        req.url = req.path;
    }
    next();
})

rutas.delete('/estudiantes/:id', async (req,res,next)=>{
    const id = req.params.id;
    await Estud.deleteOne({id:id})
    res.redirect('/');
})

rutas.put('/estudiantes/:id', async (req,res,next)=>{
    const id= req.params.id;
    const estudiante = await Estud.findOne({id:id});
    await Estud.updateOne({id:id}, {$set:{aprobado:!estudiante.aprobado}})
    res.redirect('/');
})

rutas.get('/', async (req,res)=>{
    // res.send("Saludos a la ruta GET")
    const listaEstudiantes = await Estud.find();
    // console.log(listaEstudiantes);
    res.render("hola",{listaEstudiantes})
})

//insertar estudiante

rutas.post('/estudiantes',  async (req,res)=>{
    var e = new Estud(req.body);
    await Estud.insertMany(e);
    res.redirect('/');
})


//Obtener por id
rutas.get('/estudiantes', async (req,res,next)=>{
    const e = new Estud(req.query);
    const id = e.id;
    if(id!=''){
        const listaEstudiantes = await Estud.find({id:id});
        res.render("hola",{listaEstudiantes})
    }else{
        res.redirect('/')
    }

})


module.exports = rutas;