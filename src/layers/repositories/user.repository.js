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
     * @returns { Promise< { email: string, password: string } | null > }
     */
    findUserEmailAndPassword = async (email) => {
        try {
            const findResult = await User.findOne({
                where: { email },
                attributes: ['userId', 'email', 'password'],
            });

            if (findResult === null) return null;
            else
                return {
                    userId: +findResult?.dataValues?.userId,
                    email: findResult?.dataValues?.email,
                    password: findResult?.dataValues?.password,
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
            if (err?.original?.code === 'ER_DUP_ENTRY')
                throw new ConflictException(`${userJoinDto.email} 은 사용 중인 이메일입니다.`);
            else throw this.exeptionHandler(err);
        }
    };
}

module.exports = UserRepository;
