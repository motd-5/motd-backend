[< 뒤로가기](../README.md)

## 멍청한 개발자의 CORS 이야기

-   작성자 : @unchaptered, @waveinyu
-   작성일자 : `2022-08-18`

<hr><br>

### 이론

#### Cross-Origin Resource Sharing 란?

-   작성자 : @unchaptered

#### Browser pre-flight 란?

pre-flight란 CORS 상황에서 보안을 확인하기 위해 `브라우저`가 제공하는 기능입니다. 웹 요청이 CORS 이슈의 어떤 조건을 만족할 경우, 해당 리소스에 접근하기 위해서 사전 작업이 필요할 때 pre-flight는 미리 통신을 함으로써 문제가 있는 요청에 대해 일부러 ERROR를 발생시킵니다.

#### pre-flight가 발생하는 상황

-   OPTIONS

    브라우저에서 OPTIONS를 던져 해당 사이트를 사용 가능한 METHOD 정보를 가져오게 될 때 pre-flight가 일어납니다. 개발자는 실제 원하는 요청에 대해 작성해주면 되고 따로 OPTION request를 보내는 코드를 작성하지 않아도 됩니다.

-   Simple Request

    Simple Request란 CORS의 preflight를 발생시키지 않는 요청을 말합니다.

    -   조건 1. GET, HEAD, POST 중 하나의 HTTP 메서드에 속할 때
    -   조건 2. 요청 헤더에 user agent에 의해 자동적으로 정해지는 헤더(Connection, User-Agent, Fetch 스펙에 정의된 "Forbidden header name")를 제외, 그리고 Fetch 스펙에 정의된 "CORS-safelisted request-header" 포함하는 경우

> [pre-flight 관련 정보](https://about-tech.tistory.com/entry/Programming-CORS%EB%9E%80-preflight-OPTIONS-%EB%A9%94%EC%86%8C%EB%93%9C)

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
