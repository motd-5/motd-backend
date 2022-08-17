const { Music } = require('../../sequelize/models');
const {
    // GetMusicsDto,
    PostMusicDto,
    OneMusicsDto,
    CustomException,
    ConflictException,
    UnkownException,
    UnhandleMysqlSequelizeError,
    NotFoundException,
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
            console.log(Object.keys(musics));

            const musicList = [];
            for (const music of musics) {
                musicList.push(music.dataValues);
            }
            return musicList;
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

        if (findResult === null) throw new NotFoundException('존재하지 않는 음악입니다.');

        return findResult;
    };
}

module.exports = MusicRepository;
