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
    },

    async findById(req,res){
        const restaurantes = await Restaurante.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(restaurantes)
    },
    
    async delete(req,res){
        const restaurantes = await Restaurante.destroy({
            where: {
              id: req.body.id
            }
        });
        return res.json(restaurantes)
    },

      
    async update(req,res){
        const restaurantes = await Restaurante.update(
            {                      
                nome: req.body.nome,
                url: req.body.url,
                categoria: req.body.categoria,
                tempo: req.body.tempo,
                distancia: req.body.distancia,
                status: req.body.status,
                email: req.body.email,
                senha: req.body.senha,
            }, {
                where:{
                    id: req.body.id
                }
            }
        )
            
        return res.json(restaurantes)
    },
}