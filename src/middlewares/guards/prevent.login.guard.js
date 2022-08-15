const e = require('express');
const { JwtProvider, FormDtoProvider } = require('../../modules/_.loader');

/**
 *
 * @param { e.Request } req
 * @param { e.Response } res
 * @param { e.NextFunction } next
 */
const preventLoginGuard = (req, res, next) => {
    const bearer = req?.headers?.authorization;
    const formProvider = new FormDtoProvider();
    if (bearer) {
        try {
            const jwtProvider = new JwtProvider();
            const token = jwtProvider.extract(bearer);
            const verifiedToken = jwtProvider.verifyToken(token);

            return res
                .status(401)
                .json(
                    formProvider.getFailureFormDto(
                        'Bearer 토큰이 포함 되어 있는 사용자는 중복 회원가입 / 로그인 기능을 사용할 수 없습니다.',
                    ),
                );
        } catch (err) {
            return res
                .status(401)
                .json(
                    formProvider.getFailureFormDto(
                        '만료 및 부정한 토큰을 이용하여 반복적으로 회원가입을 시도하지 말아주세요.',
                    ),
                );
        }
    }

    return next();
};

module.exports = preventLoginGuard;
