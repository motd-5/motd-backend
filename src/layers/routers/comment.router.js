const { Router } = require('express');

const CommentController = require('../controllers/comment.controller');
const { tokenGuard } = require('../../middlewares/_.loader');

const commentRouter = Router();
const commentController = new CommentController();

commentRouter.get('', commentController.getComments);
commentRouter.post('', tokenGuard, commentController.postComments);
commentRouter.put('/:commentId', tokenGuard, commentController.updateComments);
commentRouter.delete('/:commentId', tokenGuard, commentController.deleteComments);

module.exports = commentRouter;
