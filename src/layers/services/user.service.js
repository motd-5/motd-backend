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
const { JwtProvider, BcryptProvider } = require('../../modules/_.loader');
const UserRepository = require('../repositories/user.repository');

class UserService {
    userRepository;
    bcryptProvider;
    jwtProvider;

    constructor() {
        this.userRepository = new UserRepository();
        this.bcryptProvider = new BcryptProvider();
        this.jwtProvider = new JwtProvider();
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
     * @returns { Promise< { email: string, accessToken: string } > } email
     */
    login = async (userLoginDto) => {
        try {
            const findedUser = await this.userRepository.findUserWithPasswordByEmail(
                userLoginDto.email,
            );
            console.log(findedUser);

            if (findedUser === null)
                throw new NotFoundException(`${userLoginDto.email} 은 존재하지 않는 이메일입니다.`);
            else {
                const isCorrected = await this.bcryptProvider.isCorrectPassword(
                    userLoginDto.password,
                    findedUser.password,
                );
                if (!isCorrected)
                    throw new ForbiddenException(`${userLoginDto.email} 의 비밀번호가 틀렸습니다.`);

                const accessToken = this.jwtProvider.sign({
                    userId: findedUser.userId,
                    nickname: findedUser.nickname,
                });

                return {
                    email: findedUser.email,
                    accessToken,
                };
            }
        } catch (err) {
            throw err;
        }
    };
}

module.exports = UserService;
