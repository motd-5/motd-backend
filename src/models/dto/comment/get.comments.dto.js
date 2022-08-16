const joi = require('joi');
const BaseDto = require('../base/base.dto');

class GetCommentsDto extends BaseDto {
    page;
    pageCount;

    constructor({}) {
        super();
        this.page = page;
        this.pageCount = pageCount;
    }

    // Dto는 핊요한 요소들을 꺼내오는 자원
}

module.exports = GetCommentsDto;
