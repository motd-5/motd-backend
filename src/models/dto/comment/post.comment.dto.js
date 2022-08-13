const joi = require('joi');
const BaseDto = require('../base/base.dto');

class PostCommentDto extends BaseDto {
    commentId;
    userId;
    musicId;
    content;

    constructor({ commentId, userId, musicId, content }) {
        super();
        this.commentId = commentId;
        this.userId = userId;
        this.musicId = musicId;
        this.content = content;
    }

    getJoiIntsance() {
        return {
            commentId: joi.number().required(),
            userId: joi.number().required(),
            musicId: joi.number().required(),
            content: joi.string().required(),
        };
    }
}

module.exports = PostCommentDto;
