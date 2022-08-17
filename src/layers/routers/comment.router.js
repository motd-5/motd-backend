const { Router } = require('express');
const { tokenGuard } = require('../../middlewares/_.loader');

const CommentController = require('../controllers/comment.controller');
const commentController = new CommentController();

const commentRouter = Router();

commentRouter.post('', tokenGuard, commentController.postComment);
commentRouter.delete('/:commentId', tokenGuard, commentController.deleteComment);

module.exports = commentRouter;
