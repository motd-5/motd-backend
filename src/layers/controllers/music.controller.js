const e = require('express');
const joi = require('joi');
const MusicService = require('../services/music.service');
const { GetMusicDto, PostMusicDto } = require('../../models/_.loader');
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
    postMusics = async (req, res, next) => {
        const userId = 1;
        const { title, artist, album, musicValue } = req.body;
        try {
            const postMusicDto = new PostMusicDto({
                userId,
                title,
                artist,
                album,
                musicValue,
            });
            this.joiValidator.validate(postMusicDto);

            const music = await this.musicService.postMusics(postMusicDto);

            return res.status(200).json(
                this.formProvider.getSuccessFormDto('노래 생성에 성공했습니다.', {
                    music,
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
    getMusics = async (req, res, next) => {
        try {
            const music = await this.musicService.getMusics();

            return res.status(200).json(
                this.formProvider.getSuccessFormDto('노래 전체 조회에 성공했습니다.', {
                    music,
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
    getOneMusic = async (req, res, next) => {
        const musicId = 1;
        try {
            const musicOne = await this.musicService.getOneMusic();

            return res.status(200).json(
                this.formProvider.getSuccessFormDto('노래 상세 조회에 성공했습니다.', {
                    musicOne,
                }),
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
