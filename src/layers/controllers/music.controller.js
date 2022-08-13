const e = require('express');
const joi = require('joi');
const UserService = require('../services/user.service');
const { GetMusicDto, PostMusicDto } = require('../../models/_.loader');
const { FormDtoProvider, JoiValidator, exceptionHandler } = require('../../modules/_.loader');
// const etMusicsDto = require('../../models/dto/music/get.musics.dto');

class MusicController {
    formProvider;
    joiValidatorMusic;

    constructor() {
        this.formProvider = new FormDtoProvider();
        this.joiValidator = new JoiValidator();
    }

    //음악 전체 조회하고자 하는데 req.body는 아니고
    getMusics = async (req, res, next) => {
        try {
            // const getMusicsDto = new GetMusicDto({ ...req.body }); // db 안의 데이터를 가져와야 하는데
            // this.joiValidator.validate(dto);
            // console.log(getMusicsDto);
            // const music = await this.

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

    postMusics = async (req, res, next) => {
        try {
            const postMusicDto = new PostMusicDto(req.body);
            this.joiValidator.validate(postMusicDto);

            return res.status(200).json(
                this.formProvider.getSuccessFormDto('노래 생성에 성공했습니다.', {
                    // music,
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
