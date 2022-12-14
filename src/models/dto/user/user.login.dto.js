const joi = require('joi');
const BaseDto = require('../base/base.dto');

class UserLoginDto extends BaseDto {
    email;
    password;

    constructor({ email, password }) {
        super();
        this.email = email;
        this.password = password;
    }

    getJoiInstance() {
        return {
            email: joi.string().required(),
            password: joi.string().required(),
        };
    }
}

module.exports = UserLoginDto;
