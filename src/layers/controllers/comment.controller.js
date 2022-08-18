const e = require('express');
const CommentService = require('../services/comment.service');
const { FormDtoProvider, JoiValidator, exceptionHandler } = require('../../modules/_.loader');
const {
    PostCommentDto,
    GetCommentDto,
    UpdateCommentDto,
    DeleteCommentDto,
} = require('../../models/_.loader');

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
            const { userId, nickname, musicId, content } = req?.body;

            const postCommentDto = new PostCommentDto({ userId, nickname, musicId, content });
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

    getComment = async (req, res, next) => {
        try {
            const page = req?.query?.page ?? 1;
            const musicId = req?.body?.musicId;

            const getCommentDto = new GetCommentDto({ page, musicId });
            await this.joiValidator.validate(getCommentDto);

            const comment = await this.commentService.getComment(getCommentDto);

            return res.status(200).json(
                this.formProvider.getSuccessFormDto('노래 전체 조회에 성공했습니다.', {
                    commentList: comment,
                }),
            );
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };

    updateComment = async (req, res, next) => {
        try {
            const commentId = req?.params?.commentId;
            const userId = req?.body?.userId;
            const content = req?.body?.content;
            console.log(content);

            const updateCommentDto = new UpdateCommentDto({ commentId, userId, content });
            await this.joiValidator.validate(updateCommentDto);

            const result = await this.commentService.updateComment(updateCommentDto);

            return res
                .status(200)
                .json(this.formProvider.getSuccessFormDto('댓글 수정에 성공했습니다.', {}));
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
