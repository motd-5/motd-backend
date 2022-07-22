import Express from 'express';

/**
 * `App` class is craeted for single instance.
 * 
 * If you don't know Singleton Pattern.
 * 
 * Please visit : https://github.com/Boiler-Express/.github/blob/main/notes/design/SINGLETON.md
 */
export default class App {

    static app;

    constructor() {}

    /**
     * getAppInstance should return `Express Instance`
     * 
     * @param {*} MODE 
     * @param {*} PORT 
     * @returns `Express Instance`
     */
    static getAppInstance(MODE, PORT) {

        if (this.app) return this.app;

        this.app = Express();

        this.app.listen(PORT, () => {
            if (MODE !== 'test') console.log(`Server is running on ${MODE}`);
        });

        return this.app;

    }

}