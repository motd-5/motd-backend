import dotenv from 'dotenv/config';

/**
 * `Env` class is craeted for single instance.
 */
export default class Env {

    mode;
    port;

    constructor() {

        this.mode = process.env.mode;
        this.port = process.env.port;

    }

}