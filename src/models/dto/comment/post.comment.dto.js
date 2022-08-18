const joi = require('joi');
const BaseDto = require('../base/base.dto');

class PostCommentDto extends BaseDto {
    /** @type { number } */
    userId;

    /** @type { number } */
    musicId;

    /** @type { string } */
    nickname;

    /** @type { string } */
    content;

    /** @param { { userId: number, musicId: number, nickname: string, content: string } } IUserDto */
    constructor({ userId, musicId, nickname, content }) {
        super();

        this.userId = userId;
        this.musicId = musicId;
        this.nickname = nickname;
        this.content = content;
    }

    getJoiInstance() {
        return {
            nickname: joi.string().required(),
            userId: joi.number().required(),
            musicId: joi.number().required(),
            content: joi.string().required(),
        };
    }
}

module.exports = PostCommentDto;
