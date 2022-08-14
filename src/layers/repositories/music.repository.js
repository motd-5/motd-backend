const sequelize = require('sequelize');
const { Music } = require('../../sequelize/models/music')(sequelize, DataTypes);

class MusicRepository {
    // repository는 mongoose의 findbyid와 비슷 (id 기준으로 단일 문서 조회)
    constructor() {}

    postMusics = async (title, artist, album, musicUrl) => {
        // const post = await Music.create;
        // console.log('저장 성공!', post);
        return 'hello';
    };

    getMusics = () => {
        return 'happy';
    };

    getOneMusic = () => {
        console.log('왜 안 되니?');
        return 'smile';
    };
}

module.exports = MusicRepository;
