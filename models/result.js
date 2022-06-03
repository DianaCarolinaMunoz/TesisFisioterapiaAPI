const mongo = require("mongoose");

const resultScheme = new mongo.Schema({
    _id: {type:String},
    datos: {type:String}
    
});

module.exports = mongo.model("Result",resultScheme);