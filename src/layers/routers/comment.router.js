const { Router } = require('express');

const commentRouter = Router();
const CommentController = require('../controllers/comment.controller');

const commentController = new CommentController();

commentRouter.get('', commentController.getComments);
module.exports = commentRouter;
