[< 뒤로가기](../README.md)

## 😀 Find

-   작성자 : @unchaptered
-   작성일자 : `2022-08-17`

### 1 개의 테이블에서 N 개 꺼내기, `페이지네이션`

```javascript
Music.findAll({
    offset: pageCount * (page - 1),
    limit: pageCount,
    attributes: ['musicId', 'title', 'artist', 'album'],
});
```

### 1 개의 테이블에서 N 개 꺼내고 관련된 테이블 정보랑 조인하기, `페이지네이션`

```javascript
MusicLike.findAll({
    include: [
        {
            model: Music,
            attributes: ['musicId', 'title', 'artist', 'album'],
        },
    ],
    where: {
        userId: userId,
    },
    offset: pageCount * (page - 1),
    limit: pageCount,
});
```

## 👍 Like

### 좋아요 확인하기

```javascript
try {
    const findResult = await MusicLike.findOne({
        where: {
            userId: likeMusicDto.userId,
            musicId: likeMusicDto.musicId,
        },
    });

    if (findResult === null) return false;
    else return true;
} catch (err) {
    throw this.exeptionHandler(err);
}
```

### 좋아요 증가 시키기

```javascript
try {
    const result = await MusicLike.create({
        userId: likeMusicDto.userId,
        musicId: likeMusicDto.musicId,
    });
    // result.dataValues
    return {
        isLikeUp: true,
    };
} catch (err) {
    // 또는 err?.origin?.errno 1062 일 떄, ...
    if (err?.original?.code === 'ER_DUP_ENTRY')
        throw new ConflictException(`이미 좋아요가 반영되어 있습니다.`);
    else throw this.exeptionHandler(err);
}
```

### 좋아요 없애기

```javascript
try {
    const result = await MusicLike.destroy({
        where: {
            musicId: likeMusicDto.musicId,
            userId: likeMusicDto.userId,
        },
    });
    if (result === 0) throw new NotFoundException('이미 좋아요가 취소되어 있습니다.');
    else
        return {
            isLikeUp: false,
        };
} catch (err) {
    throw this.exeptionHandler(err);
}
```
