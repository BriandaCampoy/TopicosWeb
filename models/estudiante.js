const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const estEsquema = new esquema({
    id: String,
    nombre: String,
    aprobado: {
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('estudiantes',estEsquema);
                                //estudiantes es el nombre de la conexion en la base de datos