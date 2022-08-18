[< 뒤로가기](../README.md)

## Multer, Multer.S3, AWS-SDK 호환성 문제

-   작성자 : @unchaptered
-   작성일자 : `2022-xx-xx`

각 모듈을 `npm i multer multer-s3 aws-sdk` 로 설치하면 종속성 에러가 나고 있습니다. 구글링을 해보니 aws-sdk 버전이 2.xx 라면 multer-s3 도 2.xx 로 맞춰야 한다고 나와 있었습니다.

`package.json` 과 `npm versions` 항목을 확인해보니, 제가 설치한 것이 multer-s3 3.x 인 것을 알고 다운그레이드 하였습니다.
