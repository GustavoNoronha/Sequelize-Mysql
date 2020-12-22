const Promocoes = require("../models/Promocoes")

module.exports = {
    
    async index(req,res){
        const promocoes = await Promocoes.findAll();
        return res.json(promocoes)
    },
    
    async store(req,res){
        const { 
            nome,
            url,
            categoria,
            restaurante
           
        } = req.body;

        const perfil = await promocoes.create({
            nome,
            url,
            categoria,
            restaurante
           
        });

        return res.json(perfil)
    }
}