const e = require('express');
const UserService = require('../services/user.service');
const { UserJoinDto, UserLoginDto, PaginationDto } = require('../../models/_.loader');
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
        const userJoinDto = new UserJoinDto(req.body);

        try {
            await this.joiValidator.validate(userJoinDto);

            const result = await this.userService.join(userJoinDto);

            return res.status(200).json(
                this.formProvider.getSuccessFormDto('회원가입에 성공하셨습니다.', {
                    user: result,
                }),
            );
        } catch (err) {
            const exception = exceptionHandler(err);

            return res.status(exception.statusCode).json(
                this.formProvider.getFailureFormDto(exception.message, {
                    user: {
                        email: userJoinDto.email,
                        nickanme: userJoinDto.password,
                    },
                }),
            );
        }
    };

    /** @param { e.Request } req   @param { e.Response } res  @param { e.NextFunction } next */
    login = async (req, res, next) => {
        const userLoginDto = new UserLoginDto(req.body);

        try {
            await this.joiValidator.validate(userLoginDto);

            const result = await this.userService.login(userLoginDto);

            return res.status(200).json(
                this.formProvider.getSuccessFormDto('로그인에 성공하셨습니다.', {
                    user: { email: result.email },
                    accessToken: result.accessToken,
                }),
            );
        } catch (err) {
            const exception = exceptionHandler(err);

            return res.status(exception.statusCode).json(
                this.formProvider.getFailureFormDto(exception.message, {
                    user: {
                        email: userLoginDto.email,
                    },
                }),
            );
        }
    };

    /** @param { e.Request } req   @param { e.Response } res  @param { e.NextFunction } next */
    getMyUploadedMusics = async (req, res, next) => {
        try {
            const page = req?.query?.page ?? 1;
            const userId = req?.body?.userId;
            const pageDto = new PaginationDto({ userId, page });

            await this.joiValidator.validate(pageDto);

            const musicList = await this.userService.getMyUploadedMusics(pageDto);
            return res.json(
                this.formProvider.getSuccessFormDto('get My Upload Music', { musicList }),
            );
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };

    /** @param { e.Request } req   @param { e.Response } res  @param { e.NextFunction } next */
    getMyLikedMusics = async (req, res, next) => {
        try {
            const page = req?.query?.page ?? 1;
            const userId = req?.body?.userId;
            const pageDto = new PaginationDto({ userId, page });

            await this.joiValidator.validate(pageDto);

            const musicList = await this.userService.getMyLikedMusics(pageDto);
            return res.json(
                this.formProvider.getSuccessFormDto('get My Like Music', { musicList }),
            );
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };

    /** @param { e.Request } req   @param { e.Response } res  @param { e.NextFunction } next */
    getMyLikedPosts = async (req, res, next) => {
        try {
            const page = req?.query?.page ?? 1;
            const userId = req?.body?.userId;
            const pageDto = new PaginationDto({ userId, page });

            await this.joiValidator.validate(pageDto);

            const result = await this.userService.getMyLikedPosts(pageDto);
            return res.json(this.formProvider.getSuccessFormDto('get My Like Posts', { result }));
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };
}

module.exports = UserController;
