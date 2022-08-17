[< 뒤로가기](../README.md)

## Sequelize 에 대하여

-   작성자 : @unchaptered
-   작성일자 : `2022-08-17`

<hr><br>

### 🔧 설정하기

백엔드에서는 `npx sequelize init` 을 통해서 초기 설정을 했습니다.

실행 경로를 기준으로 설정이 되기 떄문에, `src/sequelize/` 디렉토리 하위에서 진행하였습니다.

```cmd
~/src/sequelize
├ config/config.json
├ migrations
├ models/index.js
└ seeders
```

> 항해99 에서 친하게 지내는 [codeing999](https://github.com/codeing999) 님이 작성해주신 내용을 기반으로 초기 설정을 마쳤습니다. <br>
>
> -   출처 : [sequelize 사용하기3 - 외래키 적용된 테이블 만들기](https://velog.io/@mero/sequelize-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B03-%EC%99%B8%EB%9E%98%ED%82%A4-%EC%A0%81%EC%9A%A9%EB%90%9C-%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%A7%8C%EB%93%A4%EA%B8%B0)

```cmd
npx sequelize db:create       # ./models/index.js 를 기준으로 DB 생성
npx sequelize db:drop         # ./models/index.js 를 기준으로 DB 제거

npx sequelize db:migrate      # ./migrations/** 를 기준으로 테이블 생성
npx sequelize db:migrate:undo # ./migrations/** 를 기준으로 테이블 제거
```

위 방법은 다음과 같은 부분이 불편했습니다.

1. `~/src/sequelize` 디렉토리에서 터미널을 열어야 하는 부분
2. `npx sequelize db:mgirate:undo` 가 하나씩 밖에 실행 되지 않는 부분

<hr><br>

### 👍 src/index.js 를

> 같이 항해 중인 [@teaskikyoon](https://github.com/taesikyoon) 님꼐서 공유해주신 sync 기능을 이용해서 편리하게 실행할 수 있었습니다.

```javascript
const { sequelize } = require('./sequelize/models');
sequelize.sync({ force: true });
```

다만, 가끔씩 DB 셋팅이 무한 반복 되는 현상이 발생하는 순간이 있었습니다.

<hr><br>

### ❌ migration 주의 사항

migration 에 적혀 있는 `제약 조건`, _pk, type, defaultValue_ 등을 반드시 models 안에 명시해줘야 했습니다.

이렇게 하지 않으면, 가끔씩 특정 테이블의 제약 조건이 반영 되지 않는 문제점이 있었습니다.

또한, 기본으로 제공 해주는 _autoIncrement id_ 나 _updatedAt, createdAt_ 등도 별도로 비활성화를 했어야 했습니다.

#### 1. 테이블의 기본 id 비활성화

`migrations/` 와 `models/` 에서 id 항목을 지워주시고 새로운 _pk_ 를 주시면 됩니다.

#### 2. updatedAt, createdAt 비활성화

Model.init 메서드의 `두 번째 인자` 의 속성에 _timestampe: false_ 를 주면 됩니다.

```javascript
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // define association here
        }
    };

    User.init({ /* 텡블 내용 */ }, {
        sequelize,
        timestamps: false,
        modelName: 'User',
    },);
    User.associate = function (models) {
        User.belongsTo(models.Comment, {

        });
    };
```
