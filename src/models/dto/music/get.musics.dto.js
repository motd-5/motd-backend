const joi = require('joi');
const BaseDto = require('../base/base.dto');

//
class GetMusicsDto extends BaseDto {
    /** @type  { number } */
    page;

    /** @type  { number } */
    pageCount;

    constructor({ page, pageCount }) {
        super();

        this.page = page;
        this.pageCount = 6;
    }

    getJoiInstance() {
        return {
            page: joi.number().required(),
            pageCount: joi.number().required(),
        };
    }
}

module.exports = GetMusicsDto;
