const Cartoes = require("../models/Cartoes")

module.exports = {
    
    async index(req,res){
        const cartoes = await Cartoes.findAll();
        return res.json(cartoes)
    },
    
    async store(req,res){
        const { 
            card_holder_name,
            card_number, 
            card_expiration_date,
            card_cvv
        } = req.body;

        const cartoes = await Cartoes.create({
            card_holder_name,
            card_number, 
            card_expiration_date,
            card_cvv
        });

        return res.json(cartoes)
    },

    
    async findById(req,res){
        const cartoes = await Cartoes.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(cartoes)
    },
    
    async delete(req,res){
        const cartoes = await Cartoes.destroy({
            where: {
              id: req.body.id
            }
        });
        return res.json(cartoes)
    },

      
    async update(req,res){
        const cartoes = await Cartoes.update(
            {   
                card_holder_name: req.body.card_holder_name,
                card_number: req.body.card_number,
                card_expiration_date: req.body.card_expiration_date,
                card_cvv: req.body.card_cvv
            }, {
                where:{
                    id: req.body.id
                }
            }
        )
            
        return res.json(cartoes)
    },
}