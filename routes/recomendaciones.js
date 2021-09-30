const recomendacionController = require("../controllers/recomendaciones")

module.exports = (app) =>{
    app.get("/",(req,resp)=>{
        resp.send("mi servidor en expres y mongo");
    }),
    app.get("/allRecomendaciones",recomendacionController.allRecomendaciones);
    app.post("/createRecomendacion",recomendacionController.createRecomendacion);
    app.post("/updateRecomendacion",recomendacionController.updateRecomendacion);
    app.post("/deleteRecomendacion",recomendacionController.deleteRecomendacion);

}