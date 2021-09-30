const userModel = require("../models/user");
const jwt = require('jsonwebtoken');

const secret = 'mysecretstotoken';

module.exports = {
    allUsers: async (req,resp)=>{
        try {
            const users = await userModel.find({type:"paciente"});
            resp.send(users);
        } catch (error) {
            resp.sendStatus(500).send({msg:"ocurrio un error en el servidor"});
        }
    },
    createUser:async (req,resp)=>{
        try {
            const usuario = req.body;
            console.log(usuario);
            const user = await userModel.create(usuario);
            resp.send(user); 
            
        } catch (error) {
            console.log(error);
            resp
            .sendStatus(500)
            .send({msg:"ocurrio un error en el servidor"});
        }
    },
    updateUser:async (req,resp)=>{
        try {
            const {cedula} = req.body;
            const entrada = req.body;
            const userUpdate = await userModel.findOneAndUpdate({cedula:cedula},entrada);
            resp.send(userUpdate);
        } catch (error) {
            resp
            .sendStatus(500)
            .send({msg:"ocurrio un error en el servidor"});
        }
    },
    deleteUser:async (req,resp)=>{
        try {
            const {cedula} = req.body;
            console.log("Controller cedula : "+cedula);
            const userDelete = await userModel.deleteOne({cedula:cedula});
            resp.send(userDelete);
        } catch (error) {
            resp
            .sendStatus(500)
            .send({msg:"ocurrio un error en el servidor"});
        }
    },
    authenticateUser: function(req,res){
        //try {
            const {cedula,password} = req.body;
           /* const user = await userModel.findOne({cedula:cedula});
            console.log(user);
            if (!user) {
                res.status(401).send({
                    error: 'Incorrect email or password 1'
                });
            } else {
                    user.isCorrectPassword(password, (err, same) => {
                    if (err) {
                        res.status(500).send({
                            error: 'Internal error please try again'
                        });
                    } else if (!same) {
                        res.status(401).send({
                            error: 'Incorrect email or password'
                        });
                    } else {
                        console.log(cedula);
                        // Issue token
                        const payload = { cedula };
                        const token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                        });
                        res.cookie('token', token, { httpOnly: true })
                        .status(200);
                    }
                    });
            }*/
                    
            userModel.findOne({ cedula },function (err, user) {
                console.log(userModel);
              if (err) {
                console.error(err);
                res.status(500).json({
                  error: 'Internal error please try again'
                });
              } else if (!user) {
                res.status(401).json({
                    error: 'Incorrect email or password 1'
                });
                console.error(err);
              } else {
                    user.isCorrectPassword(password, function(err, same) {
                    if (err) {
                        res.status(500).json({
                            error: 'Internal error please try again'
                        });
                    } else if (!same) {
                        res.status(401).json({
                            error: 'Incorrect email or password'
                        });
                    } else {
                        console.log(cedula);
                        console.log(user);
                        // Issue token
                        const payload = { cedula };
                        const token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                        });
                        console.log(token);
                        //res.cookie('token', token, { httpOnly: true }).sendStatus(200);
                        res.status(200).json({token:token});
                        
                    }
                    });
                }
            });
       /* } catch (error) {
            res
            .status(500)
            .send({msg:"ocurrio un error en el servidor"});
        }*/
    },
    checkToken: function(req,resp){
        resp.sendStatus(200); 
    }
}