const e = require('express');

const { FormDtoProvider, JwtProvider } = require('../../modules/_.loader');

/**
 *
 * @param { e.Request } req
 * @param { e.Response } res
 * @param { e.NextFunction } next
 */
const tokenGuard = (req, res, next) => {
    const bearer = req?.headers?.authorization;
    const formProvider = new FormDtoProvider();

    if (!bearer) {
        return res
            .status(401)
            .json(
                formProvider.getFailureFormDto(
                    `${req.method} ${req.originalUrl} 기능은 토큰이 없는 사용자는 이용할 수 없습니다.`,
                ),
            );
    } else {
        const jwtProvider = new JwtProvider();

        const payload = jwtProvider.verifyToken(jwtProvider.extract(bearer));

        req.body.userId = payload.userId;
        req.body.nickname = payload.nickname;

        return next();
    }
};

module.exports = tokenGuard;
