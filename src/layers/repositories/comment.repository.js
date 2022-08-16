const { Comment } = require('../../sequelize/models');
const {
    GetMusicCommentsDto,
    PostCommentDto,
    GetCommentsDto,
    UpdateCommentsDto,
    DeleteCommentsDto,
    CustomException,
    ConflictException,
    UnkownException,
    UnhandleMysqlSequelizeError,
} = require('../../models/_.loader');
const BaseRepository = require('./base.repository');

class CommentRepository extends BaseRepository {
    constructor() {
        super();
    }

    postComments = async (postCommentDto) => {
        try {
            // (추후 추가)s3 변환 정보(musicUrl) 받아오고 Post DB에 저장
            console.log('테스트', postCommentDto);
            const comment = await Comment.create({
                userId: postCommentDto.userId,
                commentId: postCommentDto.commentId,
                content: postCommentDto.content,
            });

            const postDto = new PostCommentDto(comment?.dataValues);

            return postDto;
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    getComments = async (getCommentsDto) => {
        try {
            console.log(Comment);
            console.log('테스트', getCommentsDto);

            const comments = await Comment.findAll();

            for (const comment of comments) {
                // const getAllMusic = music.dataValues;
                console.log(comment.dataValues);
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

    // getOneComment = () => {
    //     console.log('왜 안 되니?');
    //     return 'smile';
    // };
}

module.exports = CommentRepository;
