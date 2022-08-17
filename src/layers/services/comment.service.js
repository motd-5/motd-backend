const CommentRepository = require('../repositories/comment.repository');

class CommentService {
    commentRepository;
    constructor() {
        this.commentRepository = new CommentRepository();
    }
}

module.exports = CommentService;
