const resultController = require("../controllers/results")
const withAuth = require('./middleware');


module.exports = (app) =>{
    app.get("/",(req,resp)=>{
        resp.send("Servidor en expres y mongo");
    }),
    app.get("/allResults",withAuth,resultController.allResults);
    app.post("/allResultsByUser",resultController.allResultsByUser);
    app.post("/allResultsByEjercicio",resultController.allResultsByEjercicio);
    app.post("/createResult",resultController.createResult);
    app.post("/updateResult",resultController.updateResult);
    app.post("/deleteResult",resultController.deleteResult);

}