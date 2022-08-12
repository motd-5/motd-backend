import Env from './env.js';
import App from './server.js';

(() => {

    const { MODE, PORT } = Env.getEnvInstance();
    const app = App.getAppInstance(MODE, PORT);

})()