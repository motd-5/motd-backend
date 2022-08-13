const joi = require('joi');
const { BaseDto } = require('../../models/_.loader');

class JoiValidator {
    constructor() {}

    /** @param { BaseDto } dto @returns { BaseDto }*/
    async validate(dto) {
        return await joi.object(dto.getJoiInstnace()).validateAsync(dto);
    }
}

module.exports = JoiValidator;
