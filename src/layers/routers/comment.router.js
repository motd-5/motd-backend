const { Router } = require('express');

const CommentController = require('../controllers/comment.controller');
const commentController = new CommentController();

const commentRouter = Router();

commentRouter.post('', commentController.createComment);

module.exports = commentRouter;
