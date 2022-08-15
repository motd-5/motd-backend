const { Music } = require('../../sequelize/models');
const {
    GetMusicDto,
    PostMusicDto,
    CustomException,
    ConflictException,
    UnkownException,
    UnhandleMysqlSequelizeError,
} = require('../../models/_.loader');
const BaseRepository = require('./base.repository');

class MusicRepository extends BaseRepository {
    constructor() {
        super();
    }

    postMusics = async (postMusicDto) => {
        try {
            // s3 변환 정보(musicUrl) 받아오고 Post DB에 저장
            console.log(postMusicDto);
            const post = await Music.create({
                userId: postMusicDto.userId,
                title: postMusicDto.title,
                artist: postMusicDto.artist,
                album: postMusicDto.album,
                musicUrl: postMusicDto.musicValue,
            });
            console.log('저장 성공!', post);
            return;
        } catch (err) {
            console.log(err);
            throw err;
        }
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
