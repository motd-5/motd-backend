const { Board } = require('../../sequelize/models');
// const dto
const { BoardPostDto, BoardGetDto, BoardDto } = require('../../models/_.loader');
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
            const { page, pageCount } = boardGetDto;
            const posts = await Board.findAll({
                offset: pageCount * (page - 1),
                limit: pageCount,
                attributes: ['postId', 'userId', 'title', 'content'],
            });

            const postList = [];
            for (const post of posts) {
                console.log(post.dataValues);
                postList.push(post.dataValues); // 게시글 값
                // postList.push(new BoardGetDto(post?.dataValues)); // 페이지네이션 값
            }
            return postList;
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    /**
     * @param { number } postId
     */
    getOneBoard = async (postId) => {
        console.log(postId);

        const findResult = await Board.findOne({
            where: { postId },
            attributes: ['postId', 'userId', 'title', 'content'],
        });
        console.log(findResult);

        if (findResult === null) throw new NotFoundException('존재하지 않는 글입니다.');

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
