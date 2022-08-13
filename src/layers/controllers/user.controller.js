const e = require('express');
const joi = require('joi');
const UserService = require('../services/user.service');
const { UserJoinDto, UserLoginDto } = require('../../models/_.loader');
const { FormDtoProvider, JoiValidator, exceptionHandler } = require('../../modules/_.loader');

class UserController {
    userService;
    formProvider;
    joiValidator;

    constructor() {
        this.userService = new UserService();
        this.formProvider = new FormDtoProvider();
        this.joiValidator = new JoiValidator();
    }

    /** @param { e.Request } req   @param { e.Response } res  @param { e.NextFunction } next */
    join = async (req, res, next) => {
        console.log('hello');
        const userJoinDto = new UserJoinDto(req.body);

        try {
            this.joiValidator.validate(userJoinDto);

            const result = await this.userService.join(userJoinDto);

            return res
                .status(200)
                .json(
                    this.formProvider.getSuccessFormDto('회원가입에 성공하셨습니다.', { result }),
                );
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };

    /** @param { e.Request } req   @param { e.Response } res  @param { e.NextFunction } next */
    login = async (req, res, next) => {
        const userLoginDto = new UserLoginDto(req.body);

        try {
            this.joiValidator.validate(userLoginDto);

            const result = await this.userService.login(userLoginDto);

            return res
                .status(200)
                .json(this.formProvider.getSuccessFormDto('회원가입에 성공하셨습니다.', { user }));
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };
}

module.exports = UserController;
