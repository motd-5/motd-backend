const corsMiddleware = require('./cors/cors.middleware');

const s3Middleware = require('./s3/s3.middleware');

const tokenGuard = require('./guards/token.guard');
const preventLoginGuard = require('./guards/prevent.login.guard');
const preventUnLoginGuard = require('./guards/prevent.unlogin.guard');

module.exports = {
    s3Middleware,

    corsMiddleware,

    tokenGuard,
    preventLoginGuard,
    preventUnLoginGuard,
};
