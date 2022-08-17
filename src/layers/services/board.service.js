const { BoardPostDto, BoardGetDto, BoardDto, ConflictException } = require('../../models/_.loader');
const BoardRepository = require('../repositories/board.repository');

class BoardService {
    boardRepository;

    constructor() {
        this.boardRepository = new BoardRepository();
    }

    /** @param { BoardPostDto } BoardPostDto @return { string }*/
    postBoard = async (boardPostDto) => {
        const result = await this.boardRepository.postBoard(boardPostDto);

        return result;
    };

    /** @param { BoardGetDto } BoardGetDto @return { string }*/
    getBoard = async (boardGetDto) => {
        const result = await this.boardRepository.getBoard(boardGetDto);

        return result;
    };

    /** @param { number } postId @return { string }*/
    getOneBoard = async (postId) => {
        const result = await this.boardRepository.getOneBoard();

        return result;
    };

    /** @param { number } postId @return { string }*/
    putBoard = async (postId) => {
        const result = await this.boardRepository.putBoard();

        return result;
    };

    /** @param { number } postId @return { string }*/
    deleteBoard = async (postId) => {
        const result = await this.boardRepository.deleteBoard();

        return result;
    };
}

module.exports = BoardService;
