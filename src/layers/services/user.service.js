const { UserJoinDto, ConflictException } = require('../../models/_.loader');
const UserRepository = require('../repositories/user.repository');

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
}

module.exports = UserService;
