const {
    CustomException,
    UnkownException,
    UnhandleMysqlSequelizeError,
} = require('../../models/_.loader');

class BaseRepository {
    /**
     *
     * @param { Error } err
     * @returns { CustomException }
     */
    exeptionHandler = (err) => {
        if (err instanceof CustomException) return new CustomException(err.message);
        else if (err instanceof Error) return new UnhandleMysqlSequelizeError(err.message);
        else return new UnkownException(`알 수 없는 에러가 발생하였습니다.`);
    };
}

module.exports = BaseRepository;
