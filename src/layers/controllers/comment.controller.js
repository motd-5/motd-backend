const e = require('express');
const { PostCommentDto } = require('../../models/_.loader');
const { FormDtoProvider, JoiValidator, exceptionHandler } = require('../../modules/_.loader');

class CommentController {
    formProvider;
    joiValidator;

    constructor() {
        this.formProvider = new FormDtoProvider();
        this.joiValidator = new JoiValidator();
    }

    /** @param { e.Request } req   @param { e.Response } res  @param { e.NextFunction } next */
    createComment = async (req, res, next) => {
        const userId = 1;
        const { musicId, content } = req.body;

        const postCommentDto = new PostCommentDto({ userId, musicId, content });

        try {
            this.joiValidator.validate(postCommentDto);

            return res
                .status(200)
                .json(this.formProvider.getSuccessFormDto('회원가입에 성공하셨습니다.', {}));
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };
}

module.exports = CommentController;
