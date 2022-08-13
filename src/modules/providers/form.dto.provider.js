const { SuccessFomrDto, FailureFormDto } = require('../../models/_.loader');

class FormDtoProvider {
    constructor() {}

    /**
     * @param { string } message
     * @param { object } result
     */
    getSuccessFormDto(message, result = {}) {
        return new SuccessFomrDto(message, result);
    }

    /**
     * @param { string } message
     * @param { object } result
     */
    getFailureFormDto(message, result = {}) {
        return new FailureFormDto(message, result);
    }
}

module.exports = FormDtoProvider;
