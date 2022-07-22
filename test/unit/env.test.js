import Env from '../../src/env';

describe('Env is singleton class', () => {

    describe('count properties', () => {

        it ('1 static property', () => {

            expect(Object.keys(Env).length).toBe(1);

        });

        it ('1 static function', () => {

            expect(Env.getEnvInstance).toBeDefined();
            expect(typeof Env.getEnvInstance).toBe('function');

        });

    });

    describe('constructor', () => {

        it ('empty', () => {

            const env = new Env();
            expect(env).toBeDefined();
            expect(env).toEqual({});
            expect(env).toBeInstanceOf(Env);

        });

    });

    describe('function', () => {

        it ('getEnvInstance create only one Object, at most', () => {

            const defaultEnv = Env.env;
            expect(defaultEnv).toBeUndefined();
            
            const initialEnv = Env.getEnvInstance();
            const checkEnv = Env.env;

            expect(checkEnv).toBeDefined();
            expect(initialEnv).toBeDefined();
            expect(initialEnv).toBe(checkEnv);

            const reInitialEnv = Env.getEnvInstance();
            expect(reInitialEnv).toBeDefined();
            expect(reInitialEnv).toBe(initialEnv);
            expect(reInitialEnv).toBe(checkEnv);

        });
    });


});