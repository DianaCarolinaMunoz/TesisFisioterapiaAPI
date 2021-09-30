const mongo = require("mongoose");

const recomendacionScheme = new mongo.Schema({
    titulo: {type:String},
    descripcion: {type:String},
    urlAdjuntos: {type:String},
    id_cultivo:{type:String}
});

module.exports = mongo.model("Recomendacione",recomendacionScheme);