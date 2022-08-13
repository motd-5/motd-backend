const { PostMusicDto, GetMusicDto, ConflictException } = require('../../models/_.loader');
const MusicRepository = require('../repositories/music.repository');

class MusicService {
    musicRepository;

    constructor() {
        this.musicRepository = new MusicRepository();
    }

    /** @param { PostMusicDto } postMusicDto @return { string }*/
    postMusics = async (postMusicDto) => {
        const result = this.musicRepository.postMusics();

        return result;
    };

    getMusics = async (getMusic) => {
        const result = this.musicRepository.getMusics();
    };
}

module.exports = MusicService;
