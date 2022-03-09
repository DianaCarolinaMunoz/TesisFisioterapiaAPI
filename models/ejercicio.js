const mongo = require("mongoose");

const ejercicioScheme = new mongo.Schema({
    nombreEjercicio: {type:String},
    duracion: {type:Number},
    sesiones: {type:Number},
    repeticion: {type:Number},
    frecuencia:{type:Number},
    series: {type:Number},
    apnea: {type:String},
    fraccion: {type:String},
    flujo: {type:String},
    last_update: {type:String},
    id_user:{type:String}
});

module.exports = mongo.model("Ejercicio",ejercicioScheme);