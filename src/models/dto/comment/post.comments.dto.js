const joi = require('joi');
const BaseDto = require('../base/base.dto');

class PostCommentsDto extends BaseDto {
    userId;
    commentId;
    content;

    constructor({ userId, commentId, content }) {
        super();
        this.userId = userId;
        this.commentId = commentId;
        this.content = content;
    }

    getJoiInstance() {
        return {
            userId: joi.number().required(),
            commentId: joi.number().required(),
            content: joi.string().required(),
        };
    }
}

module.exports = PostCommentsDto;
