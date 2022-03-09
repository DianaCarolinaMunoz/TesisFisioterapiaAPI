const novedadModel = require("../models/novedad");

module.exports = {
    allNovedades: async (req,resp)=>{
        try {
            const novedades = await novedadModel.find();
            resp.send(novedades);
        } catch (error) {
            resp.status(500).send({msg:"ocurrio un error en el servidor"});
        }
    },
    createNovedad:async (req,resp)=>{
        try {
            const novedad = req.body;
            console.log(novedad);
            const novedadCreate = await novedadModel.create(novedad);
            resp.send(novedadCreate);
        } catch (error) {
            resp
            .status(500)
            .send({msg:"ocurrio un error en el servidor"});
        }
    },
    updateNovedad:async (req,resp)=>{
        try {
            const {id} = req.body;
            const entrada = req.body;
            const novedadUpdate = await novedadModel.findOneAndUpdate({_id:id},entrada);
            resp.send(novedadUpdate);
        } catch (error) {
            resp
            .status(500)
            .send({msg:"ocurrio un error en el servidor"});
        }
    },
    deleteNovedad:async (req,resp)=>{
        try {
            const {id} = req.body;
            const novedadDelete = await novedadModel.deleteOne({_id:id},(error)=>{
                console.log(error);
            });
            resp.send(novedadDelete);
        } catch (error) {
            resp
            .status(500)
            .send({msg:"ocurrio un error en el servidor"});
        }
    }
}