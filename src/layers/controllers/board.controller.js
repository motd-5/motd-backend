const e = require('express');
const joi = require('joi');

const BoardService = require('../services/board.service');
// const  = require('../../'); //DTO들
const {
    BadRequestException,
    UnkownException,
    NotFoundException,
} = require('../../models/_.loader');
const { FormDtoProvider, JoiValidator, exceptionHandler } = require('../../modules/_.loader');

class BoardController {
    BoardService;
    formProvider;
    joiValidator;

    constructor() {
        this.formProvider = new FormDtoProvider();
        this.joiValidator = new JoiValidator();
        this.boardService = new BoardService();
    }

    // 게시글 생성
    postBoard = async (req, res, next) => {};

    // 게시글 전체 조회
    getBoard = async (req, res, next) => {};

    // 게시글 상세 조회
    getOneBoard = async (req, res, next) => {};

    // 게시글 수정
    putBoard = async (req, res, next) => {};

    // 게시글 삭제
    deleteBoard = async (req, res, next) => {};
}

module.exports = boardController;
