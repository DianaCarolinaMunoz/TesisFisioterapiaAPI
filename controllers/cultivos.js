const cultivoModel = require("../models/cultivo");

module.exports = {
    allCultivos: async (req,resp)=>{
        try {
            const cultivos = await cultivoModel.find();
            resp.send(cultivos);
        } catch (error) {
            resp.status(500).send({msg:"ocurrio un error en el servidor"});
        }
    },
    allCultivosByUser: async (req,resp)=>{
        try {
            const {id_user} = req.body;
            console.log(id_user);
            const cultivos = await cultivoModel.find({id_user:id_user});
            resp.send(cultivos);
        } catch (error) {
            resp.status(500).send({msg:"ocurrio un error en el servidor"});
        }
    },
    createCultivo:async (req,resp)=>{
        try {
            const cultivo = req.body;
            console.log(cultivo);
            const user = await cultivoModel.create(cultivo);
            resp.send(cultivo);
        } catch (error) {
            resp
            .status(500)
            .send({msg:"ocurrio un error en el servidor"});
        }
    },
    updateCultivo:async (req,resp)=>{
        try {
            const {id} = req.body;
            const entrada = req.body;
            const cultivoUpdate = await cultivoModel.findOneAndUpdate({_id:id},entrada);
            resp.send(cultivoUpdate);
        } catch (error) {
            resp
            .status(500)
            .send({msg:"ocurrio un error en el servidor"});
        }
    },
    deleteCultivo:async (req,resp)=>{
        try {
            const {id} = req.body;
            const cultivoDelete = await cultivoModel.deleteOne({_id:id},(error)=>{
                console.log(error);
            });
            resp.send(cultivoDelete);
        } catch (error) {
            resp
            .status(500)
            .send({msg:"ocurrio un error en el servidor"});
        }
    }
}