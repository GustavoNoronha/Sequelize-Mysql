const Sugestoes = require("../models/Sugestoes")

module.exports = {
    
    async index(req,res){
        const sugestoes = await Sugestoes.findAll();
        return res.json(sugestoes)
    },
    
    async store(req,res){
        const { 
            nome,
            url
           
        } = req.body;

        const sugestoes = await Sugestoes.create({
            nome,
            url
           
        });

        return res.json(sugestoes)
    }
}