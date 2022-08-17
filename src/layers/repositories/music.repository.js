const { Music } = require('../../sequelize/models');
const {
    MusicDto,
    GetMusicsDto,
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

    /** @param { GetMusicsDto } getMusicsDto @returns */
    getMusics = async (getMusicsDto) => {
        try {
            // https://kyounghwan01.github.io/blog/etc/sequelize/sequelize-pagenation/#%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1%E1%86%B8

            const { page, pageCount } = getMusicsDto;
            const musics = await Music.findAll({
                offset: pageCount * (page - 1),
                limit: pageCount,
            });

            let musicList = [];
            for (const music of musics) {
                musicList.push(new MusicDto(music?.dataValues));
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
        const findResult = await Music.findOne({
            where: { musicId },
            attributes: ['musicId', 'title', 'artist', 'album', 'musicUrl'],
        });

        if (findResult === null) throw new NotFoundException('존재하지 않는 음악 입니다.');

        return findResult?.dataValues;
    };
}

module.exports = MusicRepository;
