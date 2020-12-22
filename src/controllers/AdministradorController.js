const Administrador = require("../models/Administrador")

module.exports = {
    
    async index(req,res){
        const adm = await Administrador.findAll();
        return res.json(adm)
    },
    
    async store(req,res){
        const { 
            nome,
            email, 
            senha,
            url
        } = req.body;

        const adm = await Administrador.create({
            nome,
            email, 
            senha,
            url
        });

        return res.json(adm)
    }
}