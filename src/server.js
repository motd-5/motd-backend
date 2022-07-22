import Express from 'express';

export default class App {

    app;

    constructor() {}

    getApplication() {
        this.app = Express();
    }

}