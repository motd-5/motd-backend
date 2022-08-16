const e = require('express');

/**
 *
 * @param { e.Request } req
 * @param { e.Response } res
 * @param { e.NextFunction } next
 */
const corsMiddleware = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return next();
};

module.exports = corsMiddleware;
