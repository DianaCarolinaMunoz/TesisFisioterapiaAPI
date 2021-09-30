const ejercicioController = require("../controllers/ejercicios")
const withAuth = require('./middleware');


module.exports = (app) =>{
    app.get("/",(req,resp)=>{
        resp.send("Servidor en expres y mongo");
    }),
    app.get("/allEjercicios",withAuth,ejercicioController.allEjercicios);
    app.post("/allEjerciciosByUser",ejercicioController.allEjerciciosByUser);
    app.post("/createEjercicio",ejercicioController.createEjercicio);
    app.post("/updateEjercicio",ejercicioController.updateEjercicio);
    app.post("/deleteEjercicio",ejercicioController.deleteEjercicio);

}