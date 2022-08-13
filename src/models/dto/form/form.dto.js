class FormDto {
    isSuccess;
    message;
    result;

    /**
     *
     * @param { boolean } isSuccess
     * @param { string } message
     * @param { object } result
     */
    constructor(isSuccess, message, result = {}) {
        const isBoolean = this.#isBoolean(isSuccess);
        if (!isBoolean) throw new Error('FormDto.isSuccess 는 boolean 타입 이어야 합니다.');

        const isString = this.#isString(message);
        if (!isString) throw new Error('FormDto.isString 는 string 타입 이어야 합니다.');

        const isObject = this.#isObject(result);
        if (!isObject)
            throw new Error('FormDto.isObject 는 Array 가 아닌 Object 타입 이어야 합니다.');

        this.isSuccess = isSuccess;
        this.message = message;
        this.result = result;
    }

    #isString(value) {
        return typeof value === 'string';
    }

    #isBoolean(value) {
        return typeof value === 'boolean';
    }

    #isObject(value) {
        return !(value instanceof Array) && value instanceof Object;
    }
}

module.exports = FormDto;
