const joi = require('joi');
const BaseDto = require('../base/base.dto');

class UserDto extends BaseDto {
    userId;
    email;
    nickname;
    createdAt;
    updatedAt;

    /** @param { { userId: number, email: string, nickname: string, createdAt: string | undefined, updatedAt: string | undefined } } IUserDto */
    constructor({ userId, email, nickname, createdAt, updatedAt }) {
        super();

        this.userId = userId;
        this.email = email;
        this.nickname = nickname;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    getJoiInstance() {
        return {
            userId: joi.number().required(),
            email: joi.string().required(),
            nickname: joi.string().required(),
            createdAt: joi.string(),
            updatedAt: joi.string(),
        };
    }
}

module.exports = UserDto;
