const JwtLib = require('jsonwebtoken');

class JwtProvider {
    static SECRET = 'sample_secret';
    static ALGORITHM = 'HS256';
    static EXPIRES_IN = '2h';

    constructor() {}

    // /** @param { JwtEnv } jwtEnv */
    // static initialize(jwtEnv) {

    //     this.SECRET = jwtEnv.SECRET;
    //     this.ALGORITHM = jwtEnv.ALGORITHM;

    // }

    /**
     * @param { object } payload
     * @returns { string }
     */
    sign(payload) {
        return JwtLib.sign(payload, JwtProvider.SECRET, {
            algorithm: JwtProvider.ALGORITHM,
            expiresIn: JwtProvider.EXPIRES_IN,
        });
    }

    /**
     * @param { string } token
     * @returns { string | Jwt.payload }
     * @throws `JsonWebTokenError`: invalid signature
     */
    verifyToken(token) {
        return JwtLib.verify(token, JwtProvider.SECRET);
    }

    /**
     * @param { string } token
     * @returns { string | Jwt.payload}
     */
    decodeToken(token) {
        return JwtLib.decode(token);
    }

    /**
     * Bearer jsonwebtoken
     * @param { string } bearerToken
     */
    extract(bearerToken) {
        return bearerToken.substring(7);
    }
}

module.exports = JwtProvider;
