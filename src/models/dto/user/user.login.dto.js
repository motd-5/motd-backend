const joi = require('joi');
const BaseDto = require('../base/base.dto');

class UserLoginDto extends BaseDto {
    email;
    pwConfirm;

    constructor({ email, password }) {
        super();
        this.email = email;
        this.password = password;
    }

    getJoiIntsance() {
        return {
            email: joi.string().required(),
            password: joi.string().required(),
        };
    }
}

module.exports = UserLoginDto;
