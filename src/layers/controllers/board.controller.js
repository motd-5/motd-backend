const e = require('express');
const joi = require('joi');

const BoardService = require('../services/board.service');
const {} = require('../../');
const { BadRequestException, UnkownException } = require('../../models/_.loader');
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
}

module.exports = boardController;
