const FormDto = require('./dto/form/form.dto');
const SuccessFormDto = require('./dto/form/success.form.dto');
const FailureFormDto = require('./dto/form/failure.form.dto');

const BaseDto = require('./dto/base/base.dto');

const UserDto = require('./dto/user/user.dto');
const UserJoinDto = require('./dto/user/user.join.dto');
const UserLoginDto = require('./dto/user/user.login.dto');

const MusicDto = require('./dto/music/musics.dto');
const LikeMusicDto = require('./dto/music/like.music.dto');
const GetMusicsDto = require('./dto/music/get.musics.dto');
const PostMusicDto = require('./dto/music/post.musics.dto');
const OneMusicsDto = require('./dto/music/one.musics.dto');

const CommentDto = require('./dto/comment/comment.dto');
const PostCommentDto = require('./dto/comment/post.comment.dto');
const GetCommentDto = require('./dto/comment/get.comment.dto');
const UpdateCommentDto = require('./dto/comment/update.comment.dto');
const DeleteCommentDto = require('./dto/comment/delete.comment.dto');

const BoardDto = require('./dto/board/board.dto');
const BoardPostDto = require('./dto/board/board.post.dto');
const BoardGetDto = require('./dto/board/board.get.dto');

const PaginationDto = require('./dto/pagination.dto');

const {
    CustomException,
    BadRequestException,
    UnauthorizedException,
    ForbiddenException,
    NotFoundException,
    ConflictException,
    UnkownException,
    UnhandleMysqlSequelizeError,
} = require('./exception/custom.exception');

module.exports = {
    FormDto,
    SuccessFormDto,
    FailureFormDto,

    BaseDto,

    UserDto,
    UserJoinDto,
    UserLoginDto,

    PaginationDto,

    MusicDto,
    GetMusicsDto,
    PostMusicDto,
    OneMusicsDto,
    LikeMusicDto,

    CommentDto,
    PostCommentDto,
    GetCommentDto,
    UpdateCommentDto,
    DeleteCommentDto,

    BoardDto,
    BoardPostDto,
    BoardGetDto,

    CustomException,
    BadRequestException,
    UnauthorizedException,
    ForbiddenException,
    NotFoundException,
    ConflictException,
    UnkownException,
    UnhandleMysqlSequelizeError,
};
