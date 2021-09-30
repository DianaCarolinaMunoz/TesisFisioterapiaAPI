const cultivoController = require("../controllers/cultivos")
const withAuth = require('./middleware');


module.exports = (app) =>{
    app.get("/",(req,resp)=>{
        resp.send("Servidor en expres y mongo");
    }),
    app.get("/allCultivos",withAuth,cultivoController.allCultivos);
    app.post("/allCultivosByUser",cultivoController.allCultivosByUser);
    app.post("/createCultivo",cultivoController.createCultivo);
    app.post("/updateCultivo",cultivoController.updateCultivo);
    app.post("/deleteCultivo",cultivoController.deleteCultivo);

}