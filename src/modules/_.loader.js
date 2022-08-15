const FormDtoProvider = require('./providers/form.dto.provider');
const exceptionHandler = require('./handler/exception.handler');
const JoiValidator = require('./validator/joi.validator');
const JwtProvider = require('./providers/jwt.provider');
const BcryptProvider = require('./providers/bcrypt.provider');

const corsMiddleware = require('./middlewares/cors/cors.middleware');
const preventLoginGuard = require('./middlewares/guards/prevent.login.guard');
const preventUnLoginGuard = require('./middlewares/guards/prevent.unlogin.guard');

module.exports = {
    exceptionHandler,

    corsMiddleware,
    preventLoginGuard,
    preventUnLoginGuard,

    JoiValidator,

    JwtProvider,
    BcryptProvider,
    FormDtoProvider,
};
