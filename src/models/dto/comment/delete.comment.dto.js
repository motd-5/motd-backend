const joi = require('joi');
const BaseDto = require('../base/base.dto');

class DeleteCommentDto extends BaseDto {
    /** @type { number } */
    userId;

    /** @type { number } */
    commentId;

    /** @param { { userId: number, commentId: number } } IUserDto */
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

module.exports = DeleteCommentDto;
