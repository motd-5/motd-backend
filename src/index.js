import Env from './env.js';
import App from './server.js';


(
    /**
     * I want to hide Logic of `index.js`.
     * 
     * This skill for protect Singleton Pattern.
     * 
     * Please visit : https://github.com/Boiler-Express/.github/blob/main/notes/design/SINGLETON.md
     */
    () => {

        const { MODE, PORT } = Env.getEnvInstance();
        const app = App.getAppInstance(MODE, PORT);
    
    }
)()