// References - https://velog.io/@shitaikoto/Node-Multer-S3-aws-sdk

const multer = require('multer');
const multerS3 = require('multer-s3');
const awsSdk = require('aws-sdk');

awsSdk.config.loadFromPath(__dirname + '/config/s3.config.json');

const s3Bucket = new awsSdk.S3();
const s3Middleware = multer({
    storage: multerS3({
        s3: s3Bucket,
        bucket: 'motd-s3-bucket',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, `${Date.now()}_${file.originalname}`);
        },
    }),
});

module.exports = s3Middleware;
