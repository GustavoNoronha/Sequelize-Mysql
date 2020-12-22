const express = require('express');

const PedidoControler = require('./controllers/PedidoController')


const routes = express.Router();

routes.get('/', (req,res) =>{
    return res.json({hello: 'World'})
});
// pedidos 
routes.post('/pedidos', PedidoControler.store );
routes.get('/pedidos', PedidoControler.index );

module.exports = routes;