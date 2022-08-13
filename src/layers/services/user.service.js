const { UserJoinDto, UserLoginDto, ConflictException } = require('../../models/_.loader');
const UserRepository = require('../repositories/user.repository');
const { User } = require('../../../models/index');

class UserService {
    userRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    /**  @param { UserJoinDto } userJoinDto  @returns { string } */
    join = async (userJoinDto) => {
        const result = this.userRepository.join();

        return result;
    };

    /**  @param { UserLoginDto } userLoginDto  @returns { string } */
    login = async (userLoginDto) => {
        return 'hello';
    };
}

module.exports = UserService;
