[< 뒤로가기](../README.md)

## Multipart form-data 와 Express

-   작성자 : @unchaptered
-   작성일자 : `2022-08-18`

<hr><br>

### ❓ multipart/form-data 란?

HTTP 프로토콜 에서 대용량(image, audio, video, etc) 파일의 전송을 하기 위해서 파일을 쪼개서 `특수한 형태로 인코딩` 한 파일 양식 입니다.

> ASCII 문자 집합이 형식이므로 공백이 ( + ) 기호로 변환되고 영숫자가 아닌 문자 또는 특수 문자가 16진수( 0-9, AF ) 값으로 변환되어 데이터가 서버로 전송되기 전에 인코딩 프로세스가 수행됩니다. <br> Geeks for Geeks - [Define multipart form data](https://www.geeksforgeeks.org/define-multipart-form-data/#:~:text=Multipart%20form%20data%3A%20The%20ENCTYPE,of%20large%20size%20of%20file.)

> Text 기반의 통신 프로토콜<br> Velog - [Dev 컴퓨터 상식 - HTTP 프로토콜](https://velog.io/@unchapterd/HTTP-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)

<hr><br>

### 😂 Express 와 mutlipart/form-data?

가장 시간이 많이 든 부분이 req.body 안에 `FormData` 가 담기지 않는 문제였던 것 같습니다.

구글링에 나온 예제 코드에서는 아래 처럼..

```javascript
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extends: false }));
```

이런 식으로 urlencdoed 를 쓰면 꼼수 처럼 FormData 를 json 안에 다시 넣어준다고 적혀 있었습니다. 하지만, extends 값이 `true/false` 인지와 무관하게 해당 기능이 작동하지 않았습니다.

그러다가 `express@4.0.0 이후 버전` 부터는 해당 꼼수가 사용이 불가능한 것을 알게 되었습니다.

따라서, express.json() 과 같은 파서를 직접적으로 사용하거나 아니면 `multer` 를 이용해서 바로 업로드를 했어야 했습니다.
