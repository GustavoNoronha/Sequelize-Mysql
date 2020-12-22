const Categoria = require("../models/Categorias")

module.exports = {
    
    async index(req,res){
        const categoria = await Categoria.findAll();
        return res.json(categoria)
    },
    
    async store(req,res){
        const { 
            nome,
            url
        } = req.body;

        const categoria = await Categoria.create({
            nome,
            url
        });

        return res.json(categoria)
    }
}