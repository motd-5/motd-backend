const e = require('express');

/**
 *
 * @param { e.Request } req
 * @param { e.Response } res
 * @param { e.NextFunction } next
 */
const preventUnLoginGuard = (req, res, next) => {
    return next();
};

module.exports = preventUnLoginGuard;
