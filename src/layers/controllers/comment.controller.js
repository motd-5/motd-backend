const e = require('express');
const joi = require('joi');
const CommentService = require('../services/comment.service');
const {
    PostCommentDto,
    GetCommentsDto,
    UpdateCommentsDto,
    DeleteCommentsDto,
} = require('../../models/_.loader');
const { FormDtoProvider, JoiValidator, exceptionHandler } = require('../../modules/_.loader');

class CommentController {
    formProvider;
    joiValidator;
    commentService;

    constructor() {
        this.formProvider = new FormDtoProvider();
        this.joiValidator = new JoiValidator();
        this.commentService = new CommentService();
    }

    /** @param { e.Request } req @param { e.Response } res @param { e.NextFunction } next */
    postComments = async (req, res, next) => {
        const userId = 1;
        const { commentId } = req.params;
        const { content } = req.body;

        try {
            const postCommentDto = new PostCommentDto({
                commentId,
                userId,
                content,
            });
            this.joiValidator.validate(postCommentDto);

            const comment = await this.commentService.postComments(postCommentDto);

            return res
                .status(200)
                .json(
                    this.formProvider.getSuccessFormDto('댓글 생성에 성공하셨습니다.', { comment }),
                );
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };

    /** @param { e.Request } req @param { e.Response } res @param { e.NextFunction } next */
    getComments = async (req, res, next) => {
        try {
            const comment = await this.commentService.getComments();

            return res.status(200).json(
                this.formProvider.getSuccessFormDto('댓글 전체 조회에 성공했습니다.', {
                    comment,
                }),
            );
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };

    // 댓글 상세 조회
    // getOneComment = async (req, res, next) => {
    //     const commentId = 1;
    //     try {
    //         const commentOne = await this.commentService.getOneComment();

    //         return res.status(200).json(
    //             this.formProvider.getSuccessFormDto('댓글 상세 조회에 성공했습니다.', {
    //                 commentOne,
    //             }),
    //         );
    //     } catch (err) {
    //         const exception = exceptionHandler(err);

    //         return res
    //         .status(exception.statusCode)
    //         .json(this.formProvider.getFailureFormDto(exception.message));
    //     }
    // }
    updateComments = async (req, res, next) => {
        const { commentId } = req.params;
        const { content, userId } = req.body;

        try {
            await joi
                .object({
                    userId: joi.number().required(),
                    commentId: joi.number().required(),
                    content: joi.string().required(),
                })
                .validateAsync({ userId, commentId, content });

            const result = await this.commentService.updateComment(userId, commentId, content);

            return res.json(result);
        } catch (err) {
            return res.json(err.message);
        }
    };

    deleteComments = async (req, res, next) => {
        const { commentId } = req.params;
        const { userId } = req.body;

        try {
            await joi
                .object({
                    userId: joi.number().required(),
                    commentId: joi.number().required(),
                })
                .validateAsync({ userId, commentId });

            const result = await this.commentService.deleteCommentById(userId, commentId);

            return res.json(result);
        } catch (err) {
            return res.json(err.message);
        }
    };
}

module.exports = CommentController;
