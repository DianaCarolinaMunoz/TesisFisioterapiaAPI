const mongo = require("mongoose");

const resultScheme = new mongo.Schema({
    id_ejercicio:  { type : String},
    last_update: { type : String , unique : true, required : true, dropDups: true },
    datos: {type:String}
    
});

module.exports = mongo.model("Result",resultScheme);