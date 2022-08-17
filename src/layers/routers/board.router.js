const { Router } = require('express');
const { preventUnLoginGuard, s3Middleware } = require('../../middlewares/_.loader');

const boardRouter = Router();
const BoardController = require('../controllers/board.controller');

const boardController = new BoardController();

boardRouter.get('');
boardRouter.post('');
boardRouter.put('/posts/:postId');
boardRouter.delete('/posts/:postId');

module.exports = boardRouter;
