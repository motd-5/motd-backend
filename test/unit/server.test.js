import App from '../../src/server';
import Express from 'express';

jest.mock('express', () => {
    
    const expressMock = {
        listen: jest.fn()
    }

    return {
        __esModule: true,
        default: jest.fn(() => expressMock)
    }
    
});

describe('App is singleton class', () => {

    describe('count properties', () => {

        it ('1 static property', () => {

            expect(Object.keys(App).length).toBe(1);

        });

        it ('1 static function', () => {

            expect(App.getAppInstance).toBeDefined();
            expect(typeof App.getAppInstance).toBe('function');

        });

    });

    describe('constructor', () => {

        it ('empty', () => {

            const app = new App();
            expect(app).toBeDefined();
            expect(app).toEqual({});
            expect(app).toBeInstanceOf(App);

        });

    });

    describe('function', () => {

        it ('getAppInstance create only one Object, at most', () => {

            
            const defaultApp = App.app;
            expect(defaultApp).toBeUndefined();

            const initialApp = App.getAppInstance();
            const checkApp = App.app;
            expect(initialApp).toBeDefined();
            expect(checkApp).toBeDefined();
            expect(initialApp).toBe(checkApp);

            const reInitialApp = App.getAppInstance();
            expect(reInitialApp).toBeDefined();
            expect(reInitialApp).toBe(initialApp);
            expect(reInitialApp).toBe(checkApp);

            expect(Express).toBeCalled();
            expect(App.app.listen).toBeCalled();

        });
    });

});