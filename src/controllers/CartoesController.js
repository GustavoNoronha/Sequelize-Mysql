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
    }
}