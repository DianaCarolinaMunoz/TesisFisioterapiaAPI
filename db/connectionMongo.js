const mongo = require("mongoose");

mongo.Promise = global.Promise;

module.exports = {
    conectar: async (app)=>{
        await mongo.connect("mongodb://localhost:27017/fisiodb",{
            useNewUrlParser:true,
            useUnifiedTopology: true
        });

        app.listen(5000,()=>{
            console.log("Conectamos mongo y el servidor");
        })
    }
}