const { Music } = require('../../sequelize/models');
const {
    GetMusicsDto,
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
            // (추후 추가)s3 변환 정보(musicUrl) 받아오고 Post DB에 저장
            console.log('테스트', postMusicDto);
            const music = await Music.create({
                userId: postMusicDto.userId,
                title: postMusicDto.title,
                artist: postMusicDto.artist,
                album: postMusicDto.album,
                musicUrl: postMusicDto.musicValue,
            });

            const postDto = new PostMusicDto(music?.dataValues);

            return postDto;
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    getMusics = async (getMusicsDto) => {
        try {
            console.log(Music);
            console.log('테스트', getMusicsDto);

            const musics = await Music.findAll();

            for (const music of musics) {
                // const getAllMusic = music.dataValues;
                console.log(music.dataValues);
            }
            // console.log(Object.keys(musics));
            // const getDto = new GetMusicsDto(musics?.dataValues);
            return;
        } catch (err) {
            console.log(err);
            throw err;
        }
        return musics;
    };

    getOneMusic = () => {
        console.log('왜 안 되니?');
        return 'smile';
    };
}

module.exports = MusicRepository;
