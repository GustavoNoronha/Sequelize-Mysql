const Endereco = require("../models/Endereco")

module.exports = {
    
    async index(req,res){
        const endereco = await Endereco.findAll();
        return res.json(endereco)
    },
    
    async store(req,res){
        const { 
            bairro,
            rua,
            numero,
            usuario
        } = req.body;

        const endereco = await Endereco.create({
            bairro,
            rua,
            numero,
            usuario
        });

        return res.json(endereco)
    }
}