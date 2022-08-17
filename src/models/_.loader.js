const FormDto = require('./dto/form/form.dto');
const SuccessFormDto = require('./dto/form/success.form.dto');
const FailureFormDto = require('./dto/form/failure.form.dto');

const BaseDto = require('./dto/base/base.dto');

const UserDto = require('./dto/user/user.dto');
const UserJoinDto = require('./dto/user/user.join.dto');
const UserLoginDto = require('./dto/user/user.login.dto');

const MusicDto = require('./dto/music/musics.dto');
const GetMusicsDto = require('./dto/music/get.musics.dto');
const PostMusicDto = require('./dto/music/post.musics.dto');
const OneMusicsDto = require('./dto/music/one.musics.dto');

const GetCommentsDto = require('./dto/comment/get.comments.dto');
const PostCommentsDto = require('./dto/comment/post.comments.dto');
const DeleteCommentsDto = require('./dto/comment/delete.comments.dto');
const UpdateCommentsDto = require('./dto/comment/update.comments.dto');

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

    PostCommentsDto,
    GetCommentsDto,
    UpdateCommentsDto,
    DeleteCommentsDto,

    MusicDto,
    GetMusicsDto,
    PostMusicDto,
    OneMusicsDto,

    CustomException,
    BadRequestException,
    UnauthorizedException,
    ForbiddenException,
    NotFoundException,
    ConflictException,
    UnkownException,
    UnhandleMysqlSequelizeError,
};
