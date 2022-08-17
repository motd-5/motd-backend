const e = require('express');
const joi = require('joi');

const BoardService = require('../services/board.service');
const { BoardPostDto, BoardGetDto } = require('../../models/_.loader');
const {
    BadRequestException,
    UnkownException,
    NotFoundException,
} = require('../../models/_.loader');
const { FormDtoProvider, JoiValidator, exceptionHandler } = require('../../modules/_.loader');

class BoardController {
    boardService;
    formProvider;
    joiValidator;

    constructor() {
        this.boardService = new BoardService();
        this.formProvider = new FormDtoProvider();
        this.joiValidator = new JoiValidator();
    }

    // 게시글 생성
    /** @param { e.Request } req   @param { e.Response } res  @param { e.NextFunction } next */
    postBoard = async (req, res, next) => {
        console.log(req.body);

        try {
            const boardPostDto = new BoardPostDto(req.body);
            await this.joiValidator.validate(boardPostDto);

            const post = await this.boardService.postBoard(boardPostDto);
            console.log(post.dataValues);

            return res.status(200).json(
                this.formProvider.getSuccessFormDto('게시물 작성이 완료됐습니다.', {
                    post: post,
                }),
            );
        } catch (err) {
            const exception = exceptionHandler(err);

            return res.status(exception.statusCode).json(
                this.formProvider.getFailureFormDto(exception.message, {
                    post: {
                        title: boardPostDto.title,
                        content: boardPostDto.password,
                    },
                }),
            );
        }
    };

    // 게시글 전체 조회
    getBoard = async (req, res, next) => {
        try {
            const page = req?.query?.page ?? 1;

            const boardGetDto = new BoardGetDto({ page });
            await this.joiValidator.validate(boardGetDto);

            const post = await this.boardService.getBoard(boardGetDto);

            return res.status(200).json(
                this.formProvider.getSuccessFormDto('게시글 조회가 완료되었습니다.', {
                    postList: post,
                }),
            );
        } catch (err) {
            const exception = exceptionHandler(err);

            return res
                .status(exception.statusCode)
                .json(this.formProvider.getFailureFormDto(exception.message));
        }
    };

    // 게시글 상세 조회
    getOneBoard = async (req, res, next) => {
        return 'hello';
    };

    // 게시글 수정
    putBoard = async (req, res, next) => {
        return 'hello';
    };

    // 게시글 삭제
    deleteBoard = async (req, res, next) => {
        return 'hello';
    };
}

module.exports = BoardController;
