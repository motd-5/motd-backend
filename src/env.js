import dotenv from 'dotenv';

const result = (() => {

    const MODE = process.env.NODE_ENV;
    const PATH = MODE === 'prod' ? '.env.prod' :
                    MODE === 'dev' ? '.env.dev' : '.env.test';
    const result = dotenv.config({
        // path: undefined
        path: PATH
    });
    
    // 객체 조건문 안에 넣으면 true
    if (result.error) {
        // throw result.error;
        throw new Error(`${PATH} 파일을 만들어주세요.`);
    }

    return result.parsed;

})()

export default result;