const { Router } = require('express');

const { FilmesController } = require('../controllers/filmes-controller');

const routes = Router();

const filmesController = new FilmesController();

routes.get('/cadastrar', filmesController.mostraCadastro);

routes.get('/deletar/:id', filmesController.deletar);

routes.get('/alterar/:id', filmesController.alterar);

routes.get('/profile', filmesController.mostraProfile);

routes.post('/update', filmesController.update);

routes.get('/comprar/:id/:email', filmesController.comprar);

routes.post('/search', filmesController.search);

routes.get('/', filmesController.listar);

routes.get('/:id', filmesController.detalhar);

routes.post('/', filmesController.cadastrar)


module.exports = routes;