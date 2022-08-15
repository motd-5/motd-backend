const { PostMusicDto, GetMusicDto, ConflictException } = require('../../models/_.loader');
const MusicRepository = require('../repositories/music.repository');

class MusicService {
    musicRepository;
    // postMusicDto;

    constructor() {
        this.musicRepository = new MusicRepository();
        // this.postMusicDto = new PostMusicDto();
    }

    /** @param { PostMusicDto } postMusicDto @return { string }*/
    postMusics = async (postMusicDto) => {
        const result = await this.musicRepository.postMusics(postMusicDto);

        return result;
    };

    /** @param { GetMusicDto } getMusicDto @return { string }*/
    getMusics = async (getMusics) => {
        const result = await this.musicRepository.getMusics();

        return result;
    };

    /** @param { GetMusicDto } getMusicDto @return { string }*/
    getOneMusic = async (getOneMusic) => {
        const result = await this.musicRepository.getOneMusic();

        return result;
    };
}

module.exports = MusicService;
