const joi = require('joi');
const BaseDto = require('../base/base.dto');

class DeleteCommentsDto extends BaseDto {
    commentId;
    content;

    constructor({ userId, commentId }) {
        super();
        this.userId = userId;
        this.commentId = commentId;
    }

    getJoiInstance() {
        return {
            userId: joi.number().required(),
            commentId: joi.number().required(),
        };
    }
}

module.exports = DeleteCommentsDto;
