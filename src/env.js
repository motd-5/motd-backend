import dotenv from 'dotenv/config';

/**
 * `Env` class is craeted for single instance.
 * 
 * If you don't know Singleton Pattern.
 * 
 * Please visit : https://github.com/Boiler-Express/.github/blob/main/notes/design/SINGLETON.md
 */
export default class Env {

    static env;

    constructor() {}

    /**
     * getEnvInstance should return `Environment Object`.
     * 
     * @returns `Object Literal`
     */
    static getEnvInstance() {

        if (this.env) return Env.env;

        this.env = {
            MODE: process.env.NODE_ENV,
            PORT: process.env.PORT
        };

        return this.env;
        
    }

}