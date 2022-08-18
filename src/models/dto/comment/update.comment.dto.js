const joi = require('joi');
const BaseDto = require('../base/base.dto');

class UpdateCommentDto extends BaseDto {
    /** @type { number } */
    userId;

    /** @type { number } */
    commentId;

    /** @type { string } */
    content;

    /** @param { { userId: number, commentId: number } } IUserDto */
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

module.exports = UpdateCommentDto;
