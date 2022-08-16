const e = require('express');

/**
 *
 * @param { e.Request } req
 * @param { e.Response } res
 * @param { e.NextFunction } next
 */
const preventLoginGuard = (req, res, next) => {
    return next();
};

module.exports = preventLoginGuard;
