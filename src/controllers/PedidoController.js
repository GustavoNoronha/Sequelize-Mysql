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
    },

    async findById(req,res){
        const pedidos = await Pedidos.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(pedidos)
    },
    
    async delete(req,res){
        const pedidos = await Pedidos.destroy({
            where: {
              id: req.body.id
            }
        });
        return res.json(pedidos)
    },

      
    async update(req,res){
        const pedidos = await Pedidos.update(
            {              
                restaurante: req.body.restaurante,
                url: req.body.url,
                numero: req.body.numero,
                anterior: req.body.anterior,
                valor: req.body.valor,
                status: req.body.status,
                status_cor: req.body.status_cor,
                endereco: req.body.endereco,
                status_restaurante: req.body.valor,
                mes: req.body.status,
                usuario: req.body.status_cor,
                pagamento_cartao: req.body.endereco,
                promocao_vinculada: req.body.status_cor,
                notificacao: req.body.endereco,
            }, {
                where:{
                    id: req.body.id
                }
            }
        )
            
        return res.json(pedidos)
    },
}