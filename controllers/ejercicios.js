const ejercicioModel = require("../models/ejercicio");

module.exports = {
    allEjercicios: async (req,resp)=>{
        try {
            const ejercicios = await ejercicioModel.find();
            resp.send(ejercicios);
        } catch (error) {
            resp.status(500).send({msg:"ocurrio un error en el servidor"});
        }
    },
    allEjerciciosByUser: async (req,resp)=>{
        try {
            const {id_user} = req.body;
            console.log(id_user);
            const ejercicios = await ejercicioModel.find({id_user:id_user});
            resp.send(ejercicios);
        } catch (error) {
            resp.status(500).send({msg:"ocurrio un error en el servidor"});
        }
    },
    createEjercicio:async (req,resp)=>{
        try {
            const ejercicio = req.body;
            console.log(ejercicio);
            const user = await ejercicioModel.create(ejercicio);
            resp.send(ejercicio);
        } catch (error) {
            resp
            .status(500)
            .send({msg:"ocurrio un error en el servidor"});
        }
    },
    updateEjercicio:async (req,resp)=>{
        try {
            const {id} = req.body;
            const entrada = req.body;
            const ejercicioUpdate = await ejercicioModel.findOneAndUpdate({_id:id},entrada);
            resp.send(ejercicioUpdate);
        } catch (error) {
            resp
            .status(500)
            .send({msg:"ocurrio un error en el servidor"});
        }
    },
    deleteEjercicio:async (req,resp)=>{
        try {
            const {id} = req.body;
            const ejercicioDelete = await ejercicioModel.deleteOne({_id:id},(error)=>{
                console.log(error);
            });
            resp.send(ejercicioDelete);
        } catch (error) {
            resp
            .status(500)
            .send({msg:"ocurrio un error en el servidor"});
        }
    }
}