const joi = require('joi');
const BaseDto = require('../base/base.dto');

class PostCommentDto extends BaseDto {
    userId;
    musicId;
    content;

    constructor({ userId, musicId, content }) {
        super();
        this.userId = userId;
        this.musicId = musicId;
        this.content = content;
    }

    getJoiInstance() {
        return {
            userId: joi.number().required(),
            musicId: joi.number().required(),
            content: joi.string().required(),
        };
    }
}

module.exports = PostCommentDto;
