// References - https://velog.io/@shitaikoto/Node-Multer-S3-aws-sdk
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
        bucket: 'motd-s3-bucket/image',
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        // key: function (req, file, cb) {
        //     cb(null, `${Date.now()}_${file.originalname}`);
        // },
    }),
});

module.exports = s3Middleware;
