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

    constructor() {
        this.formProvider = new FormDtoProvider();
        this.joiValidator = new JoiValidator();
        this.musicService = new MusicService();
    }

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

    // 음악 생성
    postMusics = async (req, res, next) => {
        try {
            const postMusicDto = new PostMusicDto(req.body);
            this.joiValidator.validate(postMusicDto);

            const music = await this.musicService.postMusics(PostMusicDto);

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
}

module.exports = MusicController;
