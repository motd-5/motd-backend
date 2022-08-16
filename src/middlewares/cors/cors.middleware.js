const e = require('express');

/**
 *
 * @param { e.Request } req
 * @param { e.Response } res
 * @param { e.NextFunction } next
 */
const corsMiddleware = (req, res, next) => {
    return next();
};

module.exports = corsMiddleware;
