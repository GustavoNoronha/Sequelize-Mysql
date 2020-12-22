const Ofertas = require("../models/Ofertas")

module.exports = {
    
    async index(req,res){
        const ofertas = await Ofertas.findAll();
        return res.json(ofertas)
    },
    
    async store(req,res){
        const { 
            nome,
            url,
            preco,
            novo_preco,
            ingredientes,
            restaurante,
            tempo,
            status_restaurante
        } = req.body;

        const ofertas = await Ofertas.create({
            nome,
            url,
            preco,
            novo_preco,
            ingredientes,
            restaurante,
            tempo,
            status_restaurante
        });

        return res.json(ofertas)
    }
}