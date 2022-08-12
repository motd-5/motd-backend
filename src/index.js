import Env from './env.js';
import App from './server.js';

(() => {

    const {
        PORT, MODE,
        MYSQL_HOST, MYSQL_USERNAME, MYSQL_DATABASE, MYSQL_DIALECT
    } = Env;

    const app = App.getAppInstance(MODE, PORT);

})();