const { Sequelize } = require('sequelize');
const { User } = require('../../sequelize/models');
const {
    UserDto,
    UserJoinDto,
    UserLoginDto,
    ConflictException,
    NotFoundException,
    ForbiddenException,
} = require('../../models/_.loader');
const { BcryptProvider } = require('../../modules/_.loader');
const UserRepository = require('../repositories/user.repository');

class UserService {
    userRepository;
    bcryptProvider;

    constructor() {
        this.userRepository = new UserRepository();
        this.bcryptProvider = new BcryptProvider();
    }

    /**
     *
     * @param { UserJoinDto } userJoinDto
     * @returns { Promise<UserDto> }
     */
    join = async (userJoinDto) => {
        try {
            const isExists = await this.userRepository.isExistsUser(userJoinDto.email);
            if (isExists)
                throw new ConflictException(`${userJoinDto.email} 은 사용 중인 이메일입니다.`);
            else {
                userJoinDto.password = await this.bcryptProvider.hashPassword(userJoinDto.password);

                return await this.userRepository.createUser(userJoinDto);
            }
        } catch (err) {
            throw err;
        }
    };

    /**
     *
     * @param { UserLoginDto } userLoginDto
     * @returns { Promise<string> } email
     */
    login = async (userLoginDto) => {
        try {
            const findedUser = await this.userRepository.findUserEmailAndPassword(
                userLoginDto.email,
            );
            if (findedUser === null)
                throw new NotFoundException(`${userLoginDto.email} 은 존재하지 않는 이메일입니다.`);
            else {
                const isCorrected = await this.bcryptProvider.isCorrectPassword(
                    userLoginDto.password,
                    findedUser.password,
                );
                if (!isCorrected)
                    throw new ForbiddenException(`${userLoginDto.email} 의 비밀번호가 틀렸습니다.`);

                return findedUser.email;
            }
        } catch (err) {
            throw err;
        }
    };
}

module.exports = UserService;
