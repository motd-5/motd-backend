const FormDto = require('./form.dto');

class FailureFormDto extends FormDto {
    /**
     *
     * @param { string } message
     * @param { object } result
     */
    constructor(message, result) {
        super(false, message, result);
    }
}

module.exports = FailureFormDto;
