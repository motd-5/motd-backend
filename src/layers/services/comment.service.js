const { UserJoinDto, ConflictException } = require('../../models/_.loader');
const CommentRepository = require('../repositories/comment.repository');

class CommentService {
    commentRepository;

    constructor() {
        this.commentRepository = new CommentRepository();
    }

    /**  @param { UserJoinDto } userJoinDto  @returns { string } */
    join = async (userJoinDto) => {
        const result = this.userRepository.join();

        return result;
    };
}

module.exports = CommentService;
