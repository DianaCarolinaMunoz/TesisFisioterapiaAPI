const mongo = require("mongoose");

const novedadScheme = new mongo.Schema({
    fecha: {type:String},
    id_cultivo:{type:String},
    numero_infectados: {type:String},
    descripcion: {type:String},
    url_adjuntos: {type:String}
});

module.exports = mongo.model("Novedade",novedadScheme);