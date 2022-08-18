[< 뒤로가기](../README.md)

## SDK 를 사용하여 이미지 업로드

-   작성자 : @unchaptered
-   작성일자 : `2022-08-18`

해당 기능 구현 간에 `트러블` [Multipart form-data 와 Express](../../docs_error/Multipart%20form-data%20%EC%99%80%20Express.md) 과 [Multer, Multer.S3, AWS-SDK 호환성 문제](../../docs_error/Multer%2C%20Multer.S3%2C%20AWS-SDK%20%ED%98%B8%ED%99%98%EC%84%B1%20%EB%AC%B8%EC%A0%9C.md) 를 맞이하였고 해결하였습니다.

-   [~/middlewares/s3/s3.middleware.js](./SDK%20%EB%A5%BC%20%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EC%97%85%EB%A1%9C%EB%93%9C.md)

```javascript
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const awsConfig = require('./config/s3.config.json');

const s3Bucket = new aws.S3({
    accessKeyId: awsConfig.accessKeyId,
    secretAccessKey: awsConfig.secretAccessKey,
    region: awsConfig.region,
});

// 에러 1 : Access Denied
// 에러 1 해결 : IAM 생성 후 입력

// 에러 2 : AccessControlListNotSupported: The bucket does not allow ACLs
// 에러 2 해결 : https://www.inflearn.com/questions/374465

const s3Middleware = multer({
    storage: multerS3({
        s3: s3Bucket,
        bucket: '버킷-이름',
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        // key: function (req, file, cb) {
        //     cb(null, `${Date.now()}_${file.originalname}`);
        // },
    }),
});

module.exports = s3Middleware;
```
