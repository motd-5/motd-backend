const UserService = require('../services/user.service');

class UserRepository {
    userService = new UserService();

    join = () => {
        return 'hello';
    };
}

module.exports = UserRepository;
