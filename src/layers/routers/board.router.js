const { Router } = require('express');
const { preventUnLoginGuard, s3Middleware, tokenGuard } = require('../../middlewares/_.loader');

const boardRouter = Router();
const BoardController = require('../controllers/board.controller');

const boardController = new BoardController();

boardRouter.post('', tokenGuard, boardController.postBoard);
boardRouter.get('', boardController.getBoard);
boardRouter.put('/:postId', boardController.putBoard);
boardRouter.delete('/:postId', boardController.deleteBoard);

module.exports = boardRouter;
