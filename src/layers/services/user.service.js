const UserRepository = require('../repositories/user.repository');

class UserService {
    userRepository = new UserRepository();

    join = () => {
        const result = this.userRepository.join();

        return result;
    };
}

module.exports = UserService;
