const { Music, MusicLike } = require('../../sequelize/models');
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
    PaginationDto,
} = require('../../models/_.loader');
const BaseRepository = require('./base.repository');
const MusicsDto = require('../../models/dto/music/post.musics.dto');

class MusicRepository extends BaseRepository {
    constructor() {
        super();
    }

    /**
     *
     * @param { number } musicId
     * @throws { UnkownException | UnhandleMysqlSequelizeError }
     * @returns { Promise<boolean> }
     */
    isExistsMusicByMusicId = async (musicId) => {
        try {
            const findResult = await Music.findOne({
                where: { musicId },
                attributes: ['musicId'],
            });

            if (findResult === null) return false;
            else return true;
        } catch (err) {
            throw this.exeptionHandler(err);
        }
    };

    /** @param { GetMusicsDto } getMusicsDto @returns { Promise<MusicDto[]> } */
    getMusics = async (getMusicsDto) => {
        try {
            // https://kyounghwan01.github.io/blog/etc/sequelize/sequelize-pagenation/#%E1%84%8C%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1%E1%86%B8

            const { page, pageCount } = getMusicsDto;
            const musics = await Music.findAll({
                offset: pageCount * (page - 1),
                limit: pageCount,
                attributes: ['musicId', 'title', 'artist', 'album'],
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

    /** @param { PaginationDto } pageDto @returns { Promise<MusicDto[]> */
    getMyUploadedMusicsByUserId = async (pageDto) => {
        try {
            const { userId, page, pageCount } = pageDto;
            const musics = await Music.findAll({
                where: {
                    userId,
                },
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

    /** @param { PaginationDto } pageDto @returns { Promise<MusicDto[]> } */
    getMyLikedMusicsByUserId = async (pageDto) => {
        try {
            const { userId, page, pageCount } = pageDto;
            const likeList = await MusicLike.findAll({
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

            let musicList = [];
            for (const like of likeList) {
                /**
                 * like.dataValues.Music.dataValues;
                 *
                 * MusicLike.findAll() 을 하면 MusicLike 가 배열로 나옵니다.
                 * 반복문 안에서 호출하면 하나의 MusicLike 가 나오고 원하는 값은 MusicLike.dataValue 안에 있습니다.
                 * dataValues 안에는 musicId, userId, Music 이 있습니다.
                 * Music 안에 있는 원하는 값은 Music.dataValues 안에 있습니다.
                 */
                const music = like.dataValues;
                musicList.push(new MusicDto(music?.dataValues));
            }

            return musicList;
        } catch (err) {
            console.log(err);
            throw this.exeptionHandler(err);
        }
    };

    /** @param { number } musicId @returns { Promise<MusicDto> } */
    getOneMusic = async (musicId) => {
        const findResult = await Music.findOne({
            where: { musicId },
            attributes: ['musicId', 'title', 'artist', 'album', 'musicUrl'],
        });

        if (findResult === null) throw new NotFoundException('존재하지 않는 음악 입니다.');

        return new MusicDto(findResult?.dataValues);
    };

    /** @param { PostMusicDto } postMusicDto @returns { Promise<MusicDto>} */
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

            return new MusicDto(music?.dataValues);
        } catch (err) {
            console.log(err);
            throw err;
        }
    };
}

module.exports = MusicRepository;
