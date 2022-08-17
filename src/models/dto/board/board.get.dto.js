const joi = require('joi');
// const { SequelizeScopeError } = require('sequelize/types');
const BaseDto = require('../base/base.dto');

class BoardGetDto extends BaseDto {
    /** @type  { number } */
    page;

    /** @type  { number } */
    pageCount;

    /** @param { { page: number, pageCount: number | undefined } } IUserDto */
    constructor({ page = 1, pageCount = 3 }) {
        // 프론트랑 상의
        super();

        this.page = page;
        this.pageCount = pageCount;
    }

    getJoiInstance() {
        return {
            page: joi.number().required(),
            pageCount: joi.number().required(),
        };
    }
}

module.exports = BoardGetDto;
