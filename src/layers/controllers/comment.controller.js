const e = require('express');
const CommentService = require('../services/comment.service');
const { FormDtoProvider, JoiValidator, exceptionHandler } = require('../../modules/_.loader');
const { PostCommentDto, DeleteCommentDto } = require('../../models/_.loader');

class CommentController {
    formProvider;
    joiValidatorMusic;
    commentService;
    constructor() {
        this.joiValidator = new JoiValidator();
        this.formProvider = new FormDtoProvider();
        this.commentService = new CommentService();
    }

    /** @param { e.Request } req @param { e.Response } res @param { e.NextFunction } next */
    postComment = async (req, res, next) => {
        try {
            const { userId, musicId, content } = req?.body;

            const postCommentDto = new PostCommentDto({ userId, musicId, content });
            await this.joiValidator.validate(postCommentDto);

            const comment = await this.commentService.postComment(postCommentDto);

            return res
                .status(200)
                .json(
                    this.formProvider.getSuccessFormDto('댓글 작성에 성공했습니다.', { comment }),
                );
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };

    /** @param { e.Request } req @param { e.Response } res @param { e.NextFunction } next */
    deleteComment = async (req, res, next) => {
        try {
            const userId = req?.body?.userId;
            const commentId = req?.params?.commentId;

            const deleteCommentDto = new DeleteCommentDto({ userId, commentId });
            await this.joiValidator.validate(deleteCommentDto);

            const result = await this.commentService.deleteComment(deleteCommentDto);

            return res
                .status(200)
                .json(this.formProvider.getSuccessFormDto('댓글 삭제에 성공했습니다.', {}));
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };
}

module.exports = CommentController;
