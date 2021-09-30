const novedadController = require("../controllers/novedades")

module.exports = (app) =>{
    app.get("/",(req,resp)=>{
        resp.send("mi servidor en expres y mongo");
    }),
    app.get("/allNovedades",novedadController.allNovedades);
    app.post("/createNovedad",novedadController.createNovedad);
    app.post("/updateNovedad",novedadController.updateNovedad);
    app.post("/deleteNovedad",novedadController.deleteNovedad);

}