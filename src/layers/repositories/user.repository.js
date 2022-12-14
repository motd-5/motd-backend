const { User } = require('../../sequelize/models');
const {
    UserDto,
    UserJoinDto,
    CustomException,
    ConflictException,
    UnkownException,
    UnhandleMysqlSequelizeError,
} = require('../../models/_.loader');
const BaseRepository = require('./base.repository');

class UserRepository extends BaseRepository {
    constructor() {
        super();
    }

    /**
     *
     * @param { number } userId
     * @throws { UnkownException | UnhandleMysqlSequelizeError }
     * @returns { Promise<boolean> }
     */
    isExistsUserById = async (userId) => {
        try {
            const findResult = await User.findOne({
                where: { userId },
                attributes: ['userId'],
            });

            if (findResult === null) return false;
            else return true;
        } catch (err) {
            throw this.exeptionHandler(err);
        }
    };

    /**
     *
     * @param { string } email
     * @throws { UnkownException | UnhandleMysqlSequelizeError }
     * @returns { Promise<boolean> }
     */
    isExistsUser = async (email) => {
        try {
            const findResult = await User.findOne({
                where: { email },
                attributes: ['email'],
            });

            if (findResult === null) return false;
            else return true;
        } catch (err) {
            throw this.exeptionHandler(err);
        }
    };

    /**
     * @param { string } email
     * @throws { UnkownException | UnhandleMysqlSequelizeError }
     * @returns { Promise< { userId: number, nickname: string, password: string } | null > }
     */
    findUserWithPasswordByEmail = async (email) => {
        try {
            const findResult = await User.findOne({
                where: { email },
                attributes: ['userId', 'email', 'nickname', 'password'],
            });

            if (findResult === null) return null;
            else
                return {
                    userId: +findResult?.dataValues?.userId,
                    email: findResult?.dataValues?.email,
                    nickname: findResult?.dataValues?.nickname,
                    password: findResult?.dataValues?.password,
                };
        } catch (err) {
            throw this.exeptionHandler(err);
        }
    };

    /**
     * @param { string } email
     * @throws { UnkownException | UnhandleMysqlSequelizeError }
     * @returns { Promise< { userId: number, nickname: string, password: string } | null > }
     */
    findUserWithoutPasswordByEmail = async (email) => {
        try {
            const findResult = await User.findOne({
                where: { email },
                attributes: ['userId', 'email', 'nickname'],
            });

            if (findResult === null) return null;
            else
                return {
                    userId: +findResult?.dataValues?.userId,
                    email: findResult?.dataValues?.email,
                    nickname: findResult?.dataValues?.nickname,
                };
        } catch (err) {
            throw this.exeptionHandler(err);
        }
    };

    /**
     *
     * @param { UserJoinDto } userJoinDto
     * @throws { ConflictException | UnkownException | UnhandleMysqlSequelizeError }
     * @returns { Promise<UserDto> }
     */
    createUser = async (userJoinDto) => {
        try {
            const result = await User.create({
                email: userJoinDto.email,
                nickname: userJoinDto.nickname,
                password: userJoinDto.password,
            });

            const userDto = new UserDto(result?.dataValues);

            return userDto;
        } catch (err) {
            // ?????? err?.origin?.errno 1062 ??? ???, ...
            if (err?.original?.code === 'ER_DUP_ENTRY')
                throw new ConflictException(`${userJoinDto.email} ??? ?????? ?????? ??????????????????.`);
            else throw this.exeptionHandler(err);
        }
    };
}

module.exports = UserRepository;
