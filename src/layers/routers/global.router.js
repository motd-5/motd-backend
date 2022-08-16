const { Router } = require('express');
const { preventLoginGuard, preventUnLoginGuard } = require('../../middlewares/_.loader');
const UserController = require('../controllers/user.controller');

const globalRouter = Router();
const userController = new UserController();

globalRouter.post('/join', preventLoginGuard, userController.join);
globalRouter.post('/login', preventLoginGuard, serController.login);

module.exports = globalRouter;
