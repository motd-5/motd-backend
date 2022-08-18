const BaseRepository = require('./base.repository');
const { User, Comment, MusicComment } = require('../../sequelize/models');

const {
    PostCommentDto,
    NotFoundException,
    GetCommentDto,
    UpdateCommentDto,
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
            const commentResult = await Comment.create({
                userId: postCommentDto.userId,
                musicId: postCommentDto.musicId,
                content: postCommentDto.content,
            });
            const comment = commentResult.dataValues;
            const musicCommentResult = await MusicComment.create({
                userId: postCommentDto.userId,
                musicId: postCommentDto.musicId,
                commentId: comment.commentId,
            });
            console.log(musicCommentResult);
            return { ...comment, nickname: postCommentDto.nickname };
        } catch (err) {
            console.error(err);
            throw this.exeptionHandler(err);
        }
    };

    /** @param { GetCommentDto } getCommentDto @returns { Promise<CommentDto[]> } */
    getComment = async (getCommentDto) => {
        try {
            const musicCommentListResult = await MusicComment.findAll({
                include: [
                    {
                        model: Comment,
                        attributes: ['userId', 'commentId', 'content'],
                    },
                    {
                        model: User,
                    },
                ],
                where: {
                    musicId: getCommentDto.musicId,
                },
            });

            let musicCommentList = [];
            for (const musicCommentResult of musicCommentListResult) {
                musicCommentList.push({
                    content: musicCommentResult.Comment.dataValues.content,
                    nickname: musicCommentResult.User.dataValues.nickname,
                    commentId: musicCommentResult.Comment.dataValues.commentId,
                });
            }
            // const { page, pageCount } = getCommentDto;
            // const comments = await Comment.findAll({
            //     offset: pageCount * (page - 1),
            //     limit: pageCount,
            //     attributes: ['commentId', 'content'],
            // });

            // let commentList = [];
            // for (const comment of comments) {
            //     commentList.push(comment.dataValues);
            // }

            return musicCommentList;
        } catch (err) {
            console.log(err);
            throw this.exeptionHandler(err);
        }
        // throw err;
    };

    // sequelize syntax Ref - https://sebhastian.com/sequelize-update-example/
    /** @param { UpdateCommentDto } updateCommentDto */
    updateComment = async (updateCommentDto) => {
        try {
            const comment = await Comment.update(
                { content: updateCommentDto.content },
                { where: { commentId: updateCommentDto.commentId } },
            );
            console.log('코멘트', comment);
            return comment;
        } catch (err) {
            console.log(err);
            throw this.exeptionHandler(err);
        }
    };

    /** @param { DeleteCommentDto } deleteCommentDto */
    deleteComment = async (deleteCommentDto) => {
        try {
            const comment = await Comment.destroy({
                where: {
                    userId: deleteCommentDto.userId,
                    commentId: deleteCommentDto.commentId,
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
