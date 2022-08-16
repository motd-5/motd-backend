const { Router } = require('express');

const CommentController = require('../controllers/comment.controller');

const commentRouter = Router();
const commentController = new CommentController();

commentRouter.get('', commentController.getComments);
commentRouter.post('', commentController.postComments);
commentRouter.put('/:commentId', commentController.updateComments);
commentRouter.delete('/:comentId', commentController.deleteComments);

module.exports = commentRouter;
