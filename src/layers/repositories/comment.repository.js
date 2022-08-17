const BaseRepository = require('./base.repository');
const { Comment } = require('../../sequelize/models');

const {
    PostCommentDto,
    NotFoundException,
    DeleteCommentDto,
    CommentDto,
} = require('../../models/_.loader');

class CommentRepository extends BaseRepository {
    constructor() {
        super();
    }

    /**
     *
     * @param { number } commentId
     * @throws { UnkownException | UnhandleMysqlSequelizeError }
     * @returns { Promise<boolean> }
     */
    isExistsCommentByCommentId = async (commentId) => {
        try {
            const findResult = await Comment.findOne({
                where: { commentId },
                attributes: ['commentId'],
            });

            if (findResult === null) return false;
            else return true;
        } catch (err) {
            throw this.exeptionHandler(err);
        }
    };

    /** @param { PostCommentDto } postCommentDto */
    createComment = async (postCommentDto) => {
        try {
            const comment = await Comment.create({
                userId: postCommentDto.userId,
                musicId: postCommentDto.musicId,
                content: postCommentDto.content,
            });

            return new CommentDto(comment.dataValues);
        } catch (err) {
            throw this.exeptionHandler(err);
        }
    };

    /** @param { DeleteCommentDto } deleteCommentDto */
    deleteComment = async (deleteCommentDto) => {
        try {
            const comment = await Comment.destroy({
                where: {
                    userId: deleteCommentDto.commentId,
                    commentId: deleteCommentDto.userId,
                },
            });
            if (comment === 0) throw new NotFoundException('이미 존재하지 않는 댓글입니다.');
            else return true;
        } catch (err) {
            throw this.exeptionHandler(err);
        }
    };
}

module.exports = CommentRepository;
