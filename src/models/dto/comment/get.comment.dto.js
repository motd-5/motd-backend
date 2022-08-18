const joi = require('joi');
const BaseDto = require('../base/base.dto');

class GetCommentDto extends BaseDto {
    /** @type  { number } */
    page;

    /** @type  { number } */
    pageCount;

    /** @type  { number } */
    musicId;

    /** @param { { page: number, pageCount: number | undefined, musicId } } IUserDto */
    constructor({ page = 1, pageCount = 10, musicId }) {
        super();

        this.page = page;
        this.pageCount = pageCount;
        this.musicId = musicId;
    }
    getJoiInstance() {
        return {
            musicId: joi.number().required(),
            page: joi.number().required(),
            pageCount: joi.number().required(),
        };
    }
}

module.exports = GetCommentDto;
