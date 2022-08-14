const { Sequelize } = require('sequelize');
const { User } = require('../../sequelize/models');
const { UserDto, UserJoinDto, UserLoginDto, ConflictException } = require('../../models/_.loader');
const UserRepository = require('../repositories/user.repository');

class UserService {
    userRepository;

    constructor() {
        this.userRepository = new UserRepository();
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

            return await this.userRepository.createUser(userJoinDto);
        } catch (err) {
            throw err;
        }
    };

    /**  @param { UserLoginDto } userLoginDto  @returns { string } */
    login = async (userLoginDto) => {
        return 'hello';
    };
}

module.exports = UserService;
