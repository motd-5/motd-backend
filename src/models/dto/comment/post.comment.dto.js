const joi = require('joi');
const BaseDto = require('../base/base.dto');

class PostCommentDto extends BaseDto {
    /** @type  { number } */
    musicId;

    /** @type  { string } */
    content;

    /** @param { { musicId: number, content: string } } IUserDto */
    constructor({ musicId, content }) {
        super();

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

module.exports = PostCommentDto;
