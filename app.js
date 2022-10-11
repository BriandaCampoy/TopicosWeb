const express = require('express');
const app = express()
//conexion base de datos
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crud-proyecto').
then(db=> console.log("Si me conecte, saludos")).
catch(err=> console.log(err));

//configurar vistas
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

//configurar las rutas
const indexRutas = require('./routes/index');
app.use('/', indexRutas);

app.listen(3000, ()=>{
    console.log('El servidor corre por el campo');
})

