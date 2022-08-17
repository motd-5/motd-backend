const { Router } = require('express');
const {} = require('../../middlewares/_.loader');

const CommentController = require('../controllers/comment.controller');
const commentController = new CommentController();

const commentRouter = Router();

module.exports = commentRouter;
