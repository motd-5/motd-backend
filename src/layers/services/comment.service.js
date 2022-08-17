const {
    PostCommentDto,
    NotFoundException,
    DeleteCommentDto,
    GetCommentDto,
    UpdateCommentDto,
} = require('../../models/_.loader');

const UserRepository = require('../repositories/user.repository');
const MusicRepository = require('../repositories/music.repository');
const CommentRepository = require('../repositories/comment.repository');

class CommentService {
    userRepository;
    musicRepository;
    commentRepository;

    constructor() {
        this.userRepository = new UserRepository();
        this.musicRepository = new MusicRepository();
        this.commentRepository = new CommentRepository();
    }

    /** @param { PostCommentDto } postCommentDto */
    postComment = async (postCommentDto) => {
        try {
            const isExistsUser = this.userRepository.isExistsUserById(postCommentDto.userId);
            if (!isExistsUser) throw new NotFoundException('존재 하지 않는 사용자 입니다.');

            const isExistsMusic = this.musicRepository.isExistsMusicByMusicId(
                postCommentDto.musicId,
            );
            if (!isExistsMusic) throw new NotFoundException('존재 하지 않는 음악 입니다.');

            return await this.commentRepository.createComment(postCommentDto);
        } catch (err) {
            throw err;
        }
    };

    /** @param { GetCommentDto } getCommentDto @return { string }*/
    getComment = async (getCommentDto) => {
        return await this.commentRepository.getComment(getCommentDto);
    };

    /** @param { UpdateCommentDto } updateCommentDto @return { string }*/
    updateComment = async (updateCommentDto) => {
        return await this.commentRepository.updateComment(updateCommentDto);
    };

    /** @param { DeleteCommentDto } deleteCommentDto */
    deleteComment = async (deleteCommentDto) => {
        try {
            const isExistsUser = this.userRepository.isExistsUserById(deleteCommentDto.userId);
            if (!isExistsUser) throw new NotFoundException('존재 하지 않는 사용자 입니다.');

            const isExistsMusic = this.commentRepository.isExistsCommentByCommentId(
                deleteCommentDto.commentId,
            );
            if (!isExistsMusic) throw new NotFoundException('존재 하지 않는 댓글 입니다.');

            return await this.commentRepository.deleteComment(deleteCommentDto);
        } catch (err) {
            throw err;
        }
    };
}

module.exports = CommentService;
