const e = require('express');
const UserService = require('../services/user.service');

class UserController {
    userService = new UserService();

    /** @param { e.Request } req   @param { e.Response } res  @param { e.NextFunction } next */
    join = (req, res, next) => {
        const result = this.userService.join();
    };
}

module.exports = UserController;
