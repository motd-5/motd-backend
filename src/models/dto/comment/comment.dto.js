const joi = require('joi');
const BaseDto = require('../base/base.dto');

class CommentDto extends BaseDto {
    /** @type { number } */
    userId;

    /** @type  { number } */
    musicId;

    /** @type  { string } */
    content;

    /** @param { { userId: number, musicId: number, content: string } } IUserDto */
    constructor({ userId, musicId, content }) {
        super();

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
