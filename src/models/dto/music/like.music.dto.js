const joi = require('joi');
const BaseDto = require('../base/base.dto');

class LikeMusicDto extends BaseDto {
    userId;
    musicId;

    constructor({ userId, musicId }) {
        super();

        this.userId = userId;
        this.musicId = musicId;
    }

    getJoiInstance() {
        return {
            userId: joi.number().required(),
            musicId: joi.number().required(),
        };
    }
}

module.exports = LikeMusicDto;
