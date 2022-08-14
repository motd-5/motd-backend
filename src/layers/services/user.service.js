const { Sequelize } = require('sequelize');
const { User } = require('../../sequelize/models');
const { UserJoinDto, UserLoginDto, ConflictException } = require('../../models/_.loader');
const UserRepository = require('../repositories/user.repository');

class UserService {
    userRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    /**  @param { UserJoinDto } userJoinDto  @returns { string } */
    join = async (userJoinDto) => {
        console.log(userJoinDto);

        try {
            const result = await User.create({
                email: userJoinDto.email,
                nickname: userJoinDto.nickname,
                password: userJoinDto.password,
            });
        } catch (err) {
            console.log(err);
            throw err;
        }

        console.log(result);

        return userJoinDto;
    };

    /**  @param { UserLoginDto } userLoginDto  @returns { string } */
    login = async (userLoginDto) => {
        return 'hello';
    };
}

module.exports = UserService;
