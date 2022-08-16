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
        try {
            return await Bcrypt.hash(password, BcryptProvider.SALT);
        } catch (err) {
            // 성공 실패와 무관하게 비동기 함수 자체의 에러 발생 가능성...
            throw err;
        }
    }

    /**
     * 입력 받은 비밀 번호와 DB 상의 비밀 번호를 비교하여 ture / false 를 반환합니다.
     *
     * @param {*} password 비밀번호
     * @param {*} hashedPassword 암호화된 비밀번호
     * @returns boolean
     */
    async isCorrectPassword(password, hashedPassword) {
        try {
            return await Bcrypt.compare(password, hashedPassword);
        } catch (err) {
            // 성공 실패와 무관하게 비동기 함수 자체의 에러 발생 가능성...
            throw err;
        }
    }
}

module.exports = BcryptProvider;
