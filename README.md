# #Mood of the day

다양한 음악을 공유 하고 함께 즐겨보세요.

[![Video Label](http://img.youtube.com/vi/G5P7WP_DokU/0.jpg)](https://youtu.be/G5P7WP_DokU)

-   Web : [MOTD - Music of the mood](http://motd.team5.s3-website.ap-northeast-2.amazonaws.com/)
-   Notion : [Notion / #mood of the day](https://www.notion.so/mood_of_the_day-5d205eaf31d24e4e8ca8d51478927b51)
-   FE Repo : [motd-5 / motd-frontend](https://github.com/motd-5/motd-frontend)
-   BE Repo : [motd-5 / motd-backend](https://github.com/motd-5/motd-backend)

![]()

<hr>

1. API 문서 리스트 [열기](./docs/api/API%20%EB%AA%85%EC%84%B8%EC%84%9C.md)
2. 트러블 문서 리스트 - [열기](./docs/error/README.md)
    1. 생경한 코드를 보고 느낀 점 - [열기](./docs/error/%EC%83%9D%EA%B2%BD%ED%95%9C%20%EC%BD%94%EB%93%9C%EB%A5%BC%20%EB%B3%B4%EA%B3%A0%20%EB%8A%90%EB%82%80%20%EC%A0%90.md)
    2. 초보 개발자의 CORS 이야기 - [열기](./docs/error/%EC%B4%88%EB%B3%B4%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98%20CORS%20%EC%9D%B4%EC%95%BC%EA%B8%B0.md)
    3. Multer, Multer.S3, AWS-SDK 호환성 문제 - [열기](./docs/error/Multer%2C%20Multer.S3%2C%20AWS-SDK%20%ED%98%B8%ED%99%98%EC%84%B1%20%EB%AC%B8%EC%A0%9C.md)
    4. Multipart form-data 와 Express - [열기](./docs/error/Multipart%20form-data%20%EC%99%80%20Express.md)
3. 기술 문서 리스트 - [열기](./docs/technique/README.md)
    1. Nginx + Express 사용 설정 - [열기](./docs/technique/aws/Nginx%20%2B%20Express%20%EC%82%AC%EC%9A%A9%20%EC%84%A4%EC%A0%95.md)
    2. IAM + S3 버킷 기본 설정 - [열기](./docs//technique/aws/IAM%20%2B%20S3%20%EB%B2%84%ED%82%B7%20%EA%B8%B0%EB%B3%B8%20%EC%84%A4%EC%A0%95.md)
    3. SDK 를 사용하여 이미지 업로드 - [열기](./docs/technique/aws/SDK%20%EB%A5%BC%20%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EC%97%85%EB%A1%9C%EB%93%9C.md)
    4. Dotenv 에 대해서 알아보자 - [열기](./docs/technique/environment/dotenv%20%EC%97%90%20%EB%8C%80%ED%95%98%EC%97%AC%20%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90.md)
    5. 환경 변수 위치 및 상세 설정 - [열기](./docs/technique/environment/%ED%99%98%EA%B2%BD%20%EB%B3%80%EC%88%98%20%EC%9C%84%EC%B9%98%20%EB%B0%8F%20%EC%83%81%EC%84%B8%20%EC%84%A4%EC%A0%95.md)
    6. CustomException 와 핸들러에 대하여 - [열기](./docs/technique/pattern/CustomException%20%EC%99%80%20%ED%95%B8%EB%93%A4%EB%9F%AC%EC%97%90%20%EB%8C%80%ED%95%98%EC%97%AC.md)
    7. Dto 와 JoiValidator 를 사용한 코드 개선 - [열기](./docs/technique/pattern/Dto%20%EC%99%80%20JoiValidator%20%EB%A5%BC%20%EC%82%AC%EC%9A%A9%ED%95%9C%20%EC%BD%94%EB%93%9C%20%EA%B0%9C%EC%84%A0.md)
    8. Jwt Middleware 에 대해서 - [열기](./docs/technique/pattern/Jwt%20Middleware%20%EC%97%90%20%EB%8C%80%ED%95%B4%EC%84%9C.md)
    9. Layered Architecture 에서 사용 해볼 법한 - [열기](./docs/technique/pattern/Layered%20Architecture%20%EC%97%90%EC%84%9C%20%EC%82%AC%EC%9A%A9%20%ED%95%B4%EB%B3%BC%20%EB%B2%95%ED%95%9C.md)
    10. Sequelize 사용 사례 - [열기](./docs/technique/sequelize/Sequelize%20%EC%82%AC%EC%9A%A9%20%EC%82%AC%EB%A1%80.md)
    11. Sequelize 에 대하여 - [열기](./docs/technique/sequelize/Sequelize%20%EC%97%90%20%EB%8C%80%ED%95%98%EC%97%AC.md)

### 폴더 구조

```cmd
root
├ /.github
│  ├  /ISSUE_TEMPLATE/**.md     # Git 이슈 탬플릿
│  └ pull_request_template.md   # Git 풀 리퀘스트
├ /.husky                       # Git Hooks (Local)
├ /docs                         # 기술 문서 : 각종 기능 적용에 대한 솔루션
├ /docs_error                   # 에러 문서 : 각종 기능 적용에
├ /src
│  ├  /layers                   # 비즈니스 레이어
│  ├  /models                   # Dto, CustomExcpetion, ...
│  ├  /modules                  # Provider, Validators, ...
│  ├  /middleware               # Cors, Guards, S3Middleware, ...
│  └  /sequelize                # Config, Migrations, Models, Seeders, ...
├ /test
└ ~ other files...
```

### 프로젝트 팀원

-   @waveinyu (Leader) [GitHub](https://github.com/waveinyu)
-   @unchaptered [GitHub](https://github.com/unchaptered) [Velog](https://velog.io/@wlwjsan)
-   @JeungHoSub [GitHub](https://github.com/JeungHoSub) [Velog](https://velog.io/@unchapterd)

### 모듈 리스트

```json
"dependencies": {
    "dotenv": "^16.0.1",            //
    "express": "^4.18.1",           //

    "joi": "^17.6.0",               //
    "cors": "^2.8.5",               //

    "bcrypt": "^5.0.1",             //
    "jsonwebtoken": "^8.5.1",       //
    "mysql2": "^2.3.3",             //
    "sequelize": "^6.21.3",         //
    "multer": "^1.4.5-lts.1",       //
    "multer-s3": "^2.10.0",         //
    "aws-sdk": "^2.1195.0"          //
},
"devDependencies": {
    "@babel/core": "^7.18.9",       //
    "@babel/preset-env": "^7.18.9", //

    "jest": "^28.1.3",              //
    "@types/jest": "^28.1.6",       //

    "cross-env": "^7.0.3",          //

    "morgan": "^1.10.0",            //
    "nodemon": "^2.0.19",           //

    "husky": "^8.0.1",              //
    "prettier": "^2.7.1",           //
    "lint-staged": "^13.0.3",       //

    "sequelize-cli": "^6.4.1"       //
},
```
