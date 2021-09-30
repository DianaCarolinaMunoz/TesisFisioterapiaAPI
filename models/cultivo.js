const mongo = require("mongoose");

const cultivoScheme = new mongo.Schema({
    nombreFinca: {type:String},
    ubicacion: {type:String},
    nombreCultivo: {type:String},
    numeroCafetos: {type:Number},
    extension: {type:Number},
    fechaSiembra:{type:String},
    id_user:{type:String}
});

module.exports = mongo.model("Cultivo",cultivoScheme);