[< λ€λ‘κ°κΈ°](../README.md)

## π Find

-   μμ±μ : @unchaptered
-   μμ±μΌμ : `2022-08-17`

### 1 κ°μ νμ΄λΈμμ N κ° κΊΌλ΄κΈ°, `νμ΄μ§λ€μ΄μ`

```javascript
Music.findAll({
    offset: pageCount * (page - 1),
    limit: pageCount,
    attributes: ['musicId', 'title', 'artist', 'album'],
});
```

### 1 κ°μ νμ΄λΈμμ N κ° κΊΌλ΄κ³  κ΄λ ¨λ νμ΄λΈ μ λ³΄λ μ‘°μΈνκΈ°, `νμ΄μ§λ€μ΄μ`

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

## π Like

### μ’μμ νμΈνκΈ°

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

### μ’μμ μ¦κ° μν€κΈ°

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
    // λλ err?.origin?.errno 1062 μΌ λ, ...
    if (err?.original?.code === 'ER_DUP_ENTRY')
        throw new ConflictException(`μ΄λ―Έ μ’μμκ° λ°μλμ΄ μμ΅λλ€.`);
    else throw this.exeptionHandler(err);
}
```

### μ’μμ μμ κΈ°

```javascript
try {
    const result = await MusicLike.destroy({
        where: {
            musicId: likeMusicDto.musicId,
            userId: likeMusicDto.userId,
        },
    });
    if (result === 0) throw new NotFoundException('μ΄λ―Έ μ’μμκ° μ·¨μλμ΄ μμ΅λλ€.');
    else
        return {
            isLikeUp: false,
        };
} catch (err) {
    throw this.exeptionHandler(err);
}
```
