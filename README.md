# #Mood of the day

프로젝트 설명

1. [기술 문서 리스트](./docs/README.md)
2. [트러블 문서 리스트](./docs_error/README.md)

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
