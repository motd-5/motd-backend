const CommentService = require('../services/comment.service');

class CommentController {
    commentService;
    constructor() {
        this.commentService = new CommentService();
    }
}

module.exports = CommentController;
