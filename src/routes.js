const express = require('express');

const AdministradorController = require('./controllers/AdministradorController');
const CartoesController = require('./controllers/CartoesController');
const CategoriaController = require('./controllers/CategoriaController');
const EnderecoController = require('./controllers/EnderecoController');
const OfertasController = require('./controllers/OfertasController');
const PedidoControler = require('./controllers/PedidoController');
const PerfilController = require('./controllers/PerfilController');
const PromocoesController = require('./controllers/PromocoesController');
const RestauranteController = require('./controllers/RestauranteController');
const SugestoesController = require('./controllers/SugestoesController');


const routes = express.Router();

routes.get('/', (req,res) =>{
    return res.json({hello: 'World'})
});
// pedidos 
routes.post('/pedidos', PedidoControler.store );
routes.get('/pedidos', PedidoControler.index );

// Administrador
routes.post('/administrador', AdministradorController.store );
routes.get('/administrador', AdministradorController.index );

//Cartoes
routes.post('/cartoes', CartoesController.store );
routes.get('/cartoes', CartoesController.index );

// Categoria
routes.post('/categoria', CategoriaController.store );
routes.get('/categoria', CategoriaController.index );

// Endereco
routes.post('/endereco', EnderecoController.store );
routes.get('/endereco', EnderecoController.index );

// Ofertas
routes.post('/ofertas', OfertasController.store );
routes.get('/ofertas', OfertasController.index );

// Perfil
routes.post('/perfil', PerfilController.store );
routes.get('/perfil', PerfilController.index );

// Promocoes
routes.post('/promocoes', PromocoesController.store );
routes.get('/promocoes', PromocoesController.index );

// Restaurantes
routes.post('/restaurante', RestauranteController.store );
routes.get('/restaurante', RestauranteController.index );

// Sugestoes
routes.post('/sugestoes', SugestoesController.store );
routes.get('/sugestoes', SugestoesController.index );

module.exports = routes;