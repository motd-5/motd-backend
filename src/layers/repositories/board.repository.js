const { Board } = require('../../sequelize/models');
// const dto
const { BoardPostDto, BoardGetDto } = require('../../models/_.loader');
const {
    CustomException,
    ConflictException,
    UnkownException,
    UnhandleMysqlSequelizeError,
    NotFoundException,
} = require('../../models/_.loader');
const BaseRepository = require('./base.repository');

class BoardRepository extends BaseRepository {
    constructor() {
        super();
    }

    /** @param { BoardPostDto } boardPostDto @returns */
    postBoard = async (boardPostDto) => {
        try {
            const post = await Board.create({
                userId: boardPostDto.userId,
                title: boardPostDto.title,
                content: boardPostDto.content,
            });

            return post;
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    /** @param { BoardGetDto } getMusicsDto @returns */
    getBoard = async (boardGetDto) => {
        try {
            console.log(Board);

            const { page, pageCount } = boardGetDto;
            const posts = await Post.findAll({
                offset: pageCount * (page - 1),
                limit: pageCount,
            });
            console.log(Object.keys(posts));

            // const musicList = [];
            // for (const music of musics) {
            //     musicList.push(music.dataValues);
            // }
            return 'hello';
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    /**
     * @param { number } musicId
     */
    getOneBoard = async (musicId) => {
        // console.log(musicId);

        // const findResult = await Music.findOne({
        //     where: { musicId },
        //     attributes: ['musicId', 'title', 'artist', 'album', 'musicUrl'],
        // });
        // console.log(findResult);

        // if (findResult === null) throw new NotFoundException('존재하지 않는 음악입니다.');

        return;
    };

    putBoard = async () => {
        return;
    };

    deleteBoard = async () => {
        return;
    };
}

module.exports = BoardRepository;
