[< 뒤로가기](../README.md)

## 멍청한 개발자의 CORS 이야기

-   작성자 : @unchaptered, @waveinyu
-   작성일자 : `2022-08-18`

<hr><br>

### 이론

#### Cross-Origin Resource Sharing 란?

-   작성자 : @unchaptered

#### Browser pre-flight 란?

-   작성자 : @waveinyu

<hr><br>

### CORS 가 작동하지 않았던 이유

처음에는 CORS 가 전역에 영향을 끼쳐야 되니까, 당연히 `미들웨어` 라고 생각을 해서 `express.json()` 처럼 사용을 했었습니다.

```javascript
const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
```

근데 CORS 가 해결이 안되서, 커스텀 corsMiddleware 를 만들어서 해결했습니다.

그런데 나중에 공식문서를 보니까, 다음과 같이 사용 해야 하는 것을 알게 되었습니다.

```javascript
const cors = require('cors');
const express = require('express');

const app = express();
app.all('*', () => cors());
```

<hr><br>

### Custom Middleware 만들기...

다음과 같이 커스텀 미들웨어를 만들어서, pre-flight 가 넘어왔을 때 어떤 친구들을 보내줘야 하는지 알려줬습니다.

[~/cors/cors.middleware.js](../src/middlewares/cors/cors.middleware.js)

```javascript
const e = require('express');

/**
 *
 * @param { e.Request } req
 * @param { e.Response } res
 * @param { e.NextFunction } next
 */
const corsMiddleware = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return next();
};

module.exports = corsMiddleware;
```

#### 💌 히스토리

1. [0815 피드백 - 후기 (이미지 업로드 관련)](https://www.notion.so/0815-c71b00563c7b4ba58a6af4a71b6b38d8)
2. [0816 - 이미지 업로드 관련 2차](https://www.notion.so/0816-2-7aea26f536aa4c92a953cbdf7092f3fa)
3. [0817 - 에러 수정 내역 - SU](https://www.notion.so/0817-SU-2e783c694dbf4edb85b63b8f2861559a)
4. [0817 - 에러](https://www.notion.so/0817-36f45b42a1aa445e8fcdea9799e7e3da)
