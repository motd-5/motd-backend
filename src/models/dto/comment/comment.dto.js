const joi = require('joi');
const BaseDto = require('../base/base.dto');

class CommentDto extends BaseDto {
    /** @type { number } */
    userId;

    /** @type  { number } */
    musicId;

    /** @type { string } */
    nickname;

    /** @type  { string } */
    content;

    /** @param { { userId: number, musicId: number, nickname:string, content: string } } IUserDto */
    constructor({ userId, musicId, nickname, content }) {
        super();

        this.nickname = nickname;
        this.userId = userId;
        this.musicId = musicId;
        this.content = content;
    }

    getJoiInstance() {
        return {
            musicId: joi.number().required(),
            content: joi.string().required(),
        };
    }
}

module.exports = CommentDto;
