const { Music } = require('../../sequelize/models');
const {
    // GetMusicsDto,
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

    /** @param { PostMusicDto } postMusicDto @returns */
    postMusics = async (postMusicDto) => {
        try {
            // (추후 추가)s3 변환 정보(musicUrl) 받아오고 Post DB에 저장

            const music = await Music.create({
                userId: postMusicDto.userId,
                title: postMusicDto.title,
                artist: postMusicDto.artist,
                album: postMusicDto.album,
                musicUrl: postMusicDto.musicUrl,
            });

            return music;
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
            // console.log(musics);
            // const getAllMusic = musics.dataValues;
            console.log(Object.keys(musics));

            const musicList = [];
            for (const music of musics) {
                musicList.push(music.dataValues);
                // console.log(getAllMusic);
            }

            return musicList;
            // console.log(music.dataValues);
            // const getDto = new GetMusicsDto(musics?.dataValues);
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    /**
     * @param { number } musicId
     */
    getOneMusic = async (musicId) => {
        console.log(musicId);

        const findResult = await Music.findOne({
            where: { musicId },
            attributes: ['musicId', 'title', 'artist', 'album', 'musicUrl'],
        });
        console.log(findResult);

        return findResult;
    };
}

module.exports = MusicRepository;
