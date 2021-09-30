const userController = require("../controllers/users");
const withAuth = require('./middleware');


module.exports = (app) =>{
    app.get("/",(req,resp)=>{
        resp.send("mi servidor en expres y mongo");
    }),
    app.get("/allUsers",withAuth,userController.allUsers);
    app.post("/createUser",withAuth,userController.createUser);
    app.post("/updateUser",withAuth,userController.updateUser);
    app.post("/deleteUser",withAuth,userController.deleteUser);
    app.post("/authenticateUser",userController.authenticateUser);
    app.get("/checkToken",withAuth,userController.checkToken);
}