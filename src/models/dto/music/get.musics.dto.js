const joi = require('joi');
const BaseDto = require('../base/base.dto');

//
class GetMusicsDto extends BaseDto {
    page;
    pageCount;

    constructor({ page, pageCount }) {
        super();

        this.page = page;
        this.pageCount = pageCount;
    }

    // Dto는 핊요한 요소들을 꺼내오는 자원
    getJoiInstance() {
        return {
            page: joi.number().required(),
            pageCount: joi.number().required(),
        };
    }
}

module.exports = GetMusicsDto;
