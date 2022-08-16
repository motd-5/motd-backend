const { Router } = require('express');
const { preventLoginGuard, preventUnLoginGuard } = require('../../middlewares/_.loader');
const UserController = require('../controllers/user.controller');

const globalRouter = Router();
const userController = new UserController();

globalRouter.post('/join', preventUnLoginGuard, userController.join);
globalRouter.post('/login', preventUnLoginGuard, userController.login);

module.exports = globalRouter;
