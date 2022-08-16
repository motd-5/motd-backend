const joi = require('joi');
const { BaseDto } = require('../../models/_.loader');

class JoiValidator {
    constructor() {}

    /** @param { BaseDto } dto @returns { BaseDto }*/
    async validate(dto) {
        return await joi.object(dto.getJoiInstance()).validateAsync(dto);
    }

    async validateNumber(num) {
        return await joi.number().validateAsync(num);
    }

    async validateString(str) {
        return await joi.string().validateAsync(str);
    }
}

module.exports = JoiValidator;
