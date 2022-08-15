const { Router } = require('express');
const UserController = require('../controllers/user.controller');

const globalRouter = Router();
const userController = new UserController();

globalRouter.post('/join', userController.join);
globalRouter.post('/login', userController.login);

module.exports = globalRouter;
