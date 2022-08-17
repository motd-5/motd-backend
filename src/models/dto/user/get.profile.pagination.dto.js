const joi = require('joi');
const BaseDto = require('../base/base.dto');

class UserDto extends BaseDto {
    /** @type { number } */
    userId;

    /** @type  { number } */
    page;

    /** @type  { number } */
    pageCount;

    /** @param { { userId: number, page: number, pageCount: number | undefined } } IUserDto */
    constructor({ userId, page = 1, pageCount = 3 }) {
        super();

        this.userId = userId;
        this.page = page;
        this.pageCount = pageCount;
    }

    getJoiInstance() {
        return {
            userId: joi.number().required(),
            page: joi.number().required(),
            pageCount: joi.number().required(),
        };
    }
}

module.exports = UserDto;
