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

        const promocoes = await Promocoes.create({
            nome,
            url,
            categoria,
            restaurante
           
        });

        return res.json(promocoes)
    },

    async findById(req,res){
        const promocoes = await Promocoes.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(promocoes)
    },
    
    async delete(req,res){
        const promocoes = await Promocoes.destroy({
            where: {
              id: req.body.id
            }
        });
        return res.json(promocoes)
    },

      
    async update(req,res){
        const promocoes = await Promocoes.update(
            {   
                nome: req.body.nome,
                url: req.body.url,
                categoria: req.body.categoria,
                restaurante: req.body.restaurante,
            }, {
                where:{
                    id: req.body.id
                }
            }
        )
            
        return res.json(promocoes)
    },
}