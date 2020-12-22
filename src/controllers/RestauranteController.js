const Restaurante = require("../models/Restaurantes")

module.exports = {
    
    async index(req,res){
        const restaurantes = await Restaurante.findAll();
        return res.json(restaurantes)
    },
    
    async store(req,res){
        const { 
            nome,
            url,
            categoria,
            tempo,
            distancia,
            status,
            email,
            senha
           
        } = req.body;

        const restaurantes = await Restaurante.create({
            nome,
            url,
            categoria,
            tempo,
            distancia,
            status,
            email,
            senha
           
        });

        return res.json(restaurantes)
    }
}