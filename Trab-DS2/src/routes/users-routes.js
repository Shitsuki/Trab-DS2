const { Router } = require('express');

const { UsersController } = require('../controllers/users-controllers');

const routes = Router();

const usersController = new UsersController();

routes.post('/cadastrar', usersController.cadastrar);

routes.get('/login', usersController.mostraLogin);

routes.get('/signup', usersController.mostraSign);

routes.get('/', usersController.mostraUsers);

routes.post('/login', usersController.login);

routes.get('/deletar/:email', usersController.deletarUser);

routes.get('/logout', usersController.logout);

module.exports = routes;