const Perfil = require("../models/Perfil")

module.exports = {
    
    async index(req,res){
        const perfil = await Perfil.findAll();
        return res.json(perfil)
    },
    
    async store(req,res){
        const { 
            nome,
            url
           
        } = req.body;

        const perfil = await Perfil.create({
            nome,
            url
           
        });

        return res.json(perfil)
    }
}