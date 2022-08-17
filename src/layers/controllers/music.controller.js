const e = require('express');
const joi = require('joi');

const MusicService = require('../services/music.service');
const {
    GetMusicsDto,
    PostMusicDto,
    BadRequestException,
    UnkownException,
    MusicDto,
    LikeMusicDto,
} = require('../../models/_.loader');
const { FormDtoProvider, JoiValidator, exceptionHandler } = require('../../modules/_.loader');
// const etMusicsDto = require('../../models/dto/music/get.musics.dto');

class MusicController {
    formProvider;
    joiValidatorMusic;
    musicService;
    // postMusicDto;

    constructor() {
        this.formProvider = new FormDtoProvider();
        this.joiValidator = new JoiValidator();
        this.musicService = new MusicService();
        // this.postMusicDto = new PostMusicDto();
    }

    // 음악 생성
    /** @param { e.Request } req   @param { e.Response } res  @param { e.NextFunction } next */
    postMusics = async (req, res, next) => {
        const userId = 1;
        const { title, artist, album } = req.query;

        try {
            const musicUrl = req?.file?.location;
            if (musicUrl === undefined)
                throw new UnkownException('알 수 없는 이유로 업로드에 실패하였습니다.');

            const postMusicDto = new PostMusicDto({ userId, title, artist, album, musicUrl });
            await this.joiValidator.validate(postMusicDto);

            console.log(req.file);

            const music = await this.musicService.postMusics(postMusicDto);

            return res.status(200).json(
                this.formProvider.getSuccessFormDto('노래 생성에 성공했습니다.', {
                    musicDesc: music,
                }),
            );
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };

    // 음악 전체 조회
    /** @param { e.Request } req   @param { e.Response } res  @param { e.NextFunction } next */
    getMusics = async (req, res, next) => {
        try {
            const page = req?.query?.page ?? 1;

            const getMusicDto = new GetMusicsDto({ page });
            await this.joiValidator.validate(getMusicDto);

            const music = await this.musicService.getMusics(getMusicDto);

            return res.status(200).json(
                this.formProvider.getSuccessFormDto('노래 전체 조회에 성공했습니다.', {
                    musicList: music,
                }),
            );
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };

    // 음악 상세 조회
    /** @param { e.Request } req   @param { e.Response } res  @param { e.NextFunction } next */
    getOneMusic = async (req, res, next) => {
        try {
            const musicId = await this.joiValidator.validateNumber(req?.params?.musicId);
            const musicOne = await this.musicService.getOneMusic(musicId);

            return res.status(200).json(
                this.formProvider.getSuccessFormDto('노래 상세 조회에 성공했습니다.', {
                    musicDesc: musicOne,
                }),
            );
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };

    // 음악 좋아요 반영 및 취소
    /** @param { e.Request } req   @param { e.Response } res  @param { e.NextFunction } next */
    toggleLike = async (req, res, next) => {
        try {
            const { userId } = req.body;
            const { musicId } = req.params;

            const likeMusicDto = new LikeMusicDto({ userId, musicId });
            await this.joiValidator.validate(likeMusicDto);

            const result = await this.musicService.toggleLike(likeMusicDto);

            return res
                .status(200)
                .json(
                    this.formProvider.getSuccessFormDto(
                        `해당 노래의 좋아요가 ${
                            result.isLikeUp ? '적용(+1)' : '취소(-1)'
                        } 되었습니다.`,
                        { result },
                    ),
                );
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };
}

module.exports = MusicController;
