const joi = require('joi');
// const { SequelizeScopeError } = require('sequelize/types');
const BaseDto = require('../base/base.dto');

class BoardDto extends BaseDto {
    postId;
    userId;
    title;
    content;

    constructor({ postId, userId, title, content }) {
        super();

        this.postId = postId;
        this.userId = userId;
        this.title = title;
        this.content = content;
    }

    getJoiInstance() {
        return {
            postId: joi.number().required(),
            musicId: joi.number().required(),
            title: joi.string().required(),
            content: joi.string().required(),
        };
    }
}

module.exports = BoardDto;
