const Bcrypt = require('bcrypt');

class BcryptProvider {
    static SALT = 10;

    constructor() {}

    // /**
    //  * @param { BcryptEnv } bcryptEnv
    //  */
    // static initialize(bcryptEnv) {
    //     this.SALT = bcryptEnv.SALT;
    // }

    /**
     *
     * @param {*} password 비밀번호
     * @returns
     */
    async hashPassword(password) {
        return await Bcrypt.hash(password, BcryptProvider.SALT);
    }

    /**
     * 입력 받은 비밀 번호와 DB 상의 비밀 번호를 비교하여 ture / false 를 반환합니다.
     *
     * @param {*} password 비밀번호
     * @param {*} hashedPassword 암호화된 비밀번호
     * @returns boolean
     */
    async isCorrectPassword(password, hashedPassword) {
        return await Bcrypt.compare(password, hashedPassword);
    }
}

module.exports = BcryptProvider;
