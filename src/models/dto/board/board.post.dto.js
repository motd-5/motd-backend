const joi = require('joi');
// const { SequelizeScopeError } = require('sequelize/types');
const BaseDto = require('../base/base.dto');

class BoardPostDto extends BaseDto {
    userId;
    title;
    content;

    constructor({ userId, title, content }) {
        super();

        this.userId = userId;
        this.title = title;
        this.content = content;
    }

    getJoiInstance() {
        return {
            userId: joi.number().required(),
            title: joi.string().required(),
            content: joi.string().required(),
        };
    }
}

module.exports = BoardPostDto;
