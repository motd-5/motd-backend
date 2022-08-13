const joi = require('joi');
const BaseDto = require('../base/base.dto');

class UserJoinDto extends BaseDto {
    email;
    nickname;
    password;
    pwConfirm;

    constructor({ email, nickname, password, pwConfirm }) {
        super();
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.pwConfirm = pwConfirm;
    }

    getJoiIntsance() {
        return {
            email: joi.string().required(),
            nickname: joi.string().required(),
            password: joi.string().required(),
            pwConfirm: joi.ref('password'),
        };
    }
}

module.exports = UserJoinDto;
