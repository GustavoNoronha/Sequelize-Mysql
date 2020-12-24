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
    },


    async findById(req,res){
        const adm = await Administrador.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(adm)
    },
    
    async delete(req,res){
        const adm = await Administrador.destroy({
            where: {
              id: req.body.id
            }
        });
        return res.json(adm)
    },

      
    async update(req,res){
        const adm = await Administrador.update(
            { 
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                url: req.body.url
            }, {
                where:{
                    id: req.body.id
                }
            }
        )
            
        return res.json(adm)
    },
}