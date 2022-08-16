const {
    PostCommentDto,
    GetCommentDto,
    UpdateCommentDto,
    DeleteCommentDto,
    UserJoinDto,
    ConflictException,
} = require('../../models/_.loader');
const CommentRepository = require('../repositories/comment.repository');

class CommentService {
    commentRepository;

    constructor() {
        this.commentRepository = new CommentRepository();
    }

    /** @param { PostCommentDto } postCommentDto @return { string }*/
    postComment = async (postCommentDto) => {
        const result = await this.commentRepository.postComments(postCommentDto);

        return result;
    };

    /** @param { GetCommentDto } getCommentDto @return { string }*/
    getComments = async (getCommentsDto) => {
        const result = await this.commentRepository.getComments(getCommentDto);

        return result;
    };

    /** @param { UpdateCommentDto } getCommentDto @return { string }*/
    updateComments = async (updateComments) => {
        const result = await this.commentRepository.updateComments(updateCommentDto);

        return result;
    };

    /** @param { DeleteCommentDto } getCommentDto @return { string }*/
    deleteComments = async (deleteComments) => {
        const result = await this.commentRepository.deleteComments(deleteCommentDto);

        return result;
    };

    // /** @param { GetCommentDto } getCommentDto @return { string }*/
    // getOneComment = async (getOneComment) => {
    //     const result = await this.commentRepository.getOneComment();

    //     return result;
    // };
}

module.exports = CommentService;
