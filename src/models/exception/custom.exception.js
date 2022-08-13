class CustomException extends Error {
    name;
    message;
    statusCode;

    constructor(message, statusCode = 500) {
        super(message);

        this.name = 'CustomException';
        this.message = message;
        this.statusCode = statusCode;
    }
}

/**
 * @property statusCode 409
 */
class ConflictException extends CustomException {
    constructor(message) {
        super(message);

        this.name = 'ConflictException';
        this.statusCode = 409;
    }
}

class UnkownException extends CustomException {
    constructor(message) {
        super(message);

        this.name = 'UnkownException';
        this.statusCode = 500;
    }
}

module.exports = {
    CustomException,
    ConflictException,
    UnkownException,
};
