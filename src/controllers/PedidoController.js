const Pedidos = require("../models/Pedidos")

module.exports = {
    
    async index(req,res){
        const pedidos = await Pedidos.findAll();
        return res.json(pedidos)
    },
    
    async store(req,res){
        const { 
            data,
            restaurante,
            url,
            numero,
            pedido,
            anterior,
            status,
            valor,
            status_cor,
            endereco,
            status_restaurante,
            mes,
            usuario,
            pagamento_cartao,
            promocao_vinculada,
            notificacao
        } = req.body;

        const pedidos = await Pedidos.create({ data,
            restaurante,
            url,
            numero,
            pedido,
            anterior,
            status,
            valor,
            status_cor,
            endereco,
            status_restaurante,
            mes,
            usuario,
            pagamento_cartao,
            promocao_vinculada,
            notificacao
        });

        return res.json(pedidos)
    }
}