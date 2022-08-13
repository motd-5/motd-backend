const FormDto = require('./form.dto');

class SuccessFormDto extends FormDto {
    /**
     *
     * @param { string } message
     * @param { object } result
     */
    constructor(message, result) {
        super(true, message, result);
    }
}

module.exports = SuccessFormDto;
