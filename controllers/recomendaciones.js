const recomendacionModel = require("../models/recomendacion");

module.exports = {
    allRecomendaciones: async (req,resp)=>{
        try {
            const recomendaciones = await recomendacionModel.find();
            resp.send(recomendaciones);
        } catch (error) {
            resp.status(500).send({msg:"ocurrio un error en el servidor"});
        }
    },
    createRecomendacion:async (req,resp)=>{
        try {
            const recomendacion = req.body;
            console.log(recomendacion);
            const recomendacionCreate = await recomendacionModel.create(recomendacion);
            resp.send(recomendacionCreate);
        } catch (error) {
            resp
            .status(500)
            .send({msg:"ocurrio un error en el servidor"});
        }
    },
    updateRecomendacion:async (req,resp)=>{
        try {
            const {id} = req.body;
            const entrada = req.body;
            const recomendacionUpdate = await recomendacionModel.findOneAndUpdate({_id:id},entrada);
            resp.send(recomendacionUpdate);
        } catch (error) {
            resp
            .status(500)
            .send({msg:"ocurrio un error en el servidor"});
        }
    },
    deleteRecomendacion:async (req,resp)=>{
        try {
            const {id} = req.body;
            const recomendacionDelete = await recomendacionModel.deleteOne({_id:id},(error)=>{
                console.log(error);
            });
            resp.send(recomendacionDelete);
        } catch (error) {
            resp
            .status(500)
            .send({msg:"ocurrio un error en el servidor"});
        }
    }
}