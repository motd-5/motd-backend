const { Router } = require('express');
const UserController = require('../controllers/user.controller');

const globalRouter = Router();
const userController = new UserController();

globalRouter.post('/join', userController.join);

module.exports = globalRouter;
