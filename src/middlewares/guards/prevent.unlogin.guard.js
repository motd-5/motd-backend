const e = require('express');

const { FormDtoProvider, JwtProvider } = require('../../modules/_.loader');
const UserPository = require('../../layers/repositories/user.repository');

/**
 *
 * @param { e.Request } req
 * @param { e.Response } res
 * @param { e.NextFunction } next
 */
const preventUnLoginGuard = (req, res, next) => {
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

        try {
            const payload = jwtProvider.verifyToken(jwtProvider.extract(bearer));

            req.body.userId = payload.userId;
            req.body.nickname = payload.nickname;

            const isExists = new UserPository().isExistsUserById(payload.userId);
            if (!isExists) return res.json('존재하지 않는 유저입니다.');

            return next();
        } catch (err) {
            console.log(err);
            return res.json('알 수 없는 에러');
        }
    }
};

module.exports = preventUnLoginGuard;
