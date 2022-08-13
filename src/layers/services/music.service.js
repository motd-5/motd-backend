const { GetMusicDto, ConflictException } = require('../../models/_.loader');
const MusicRepository = require('../repositories/music.repository');

class MusicService {
    musicRepository;

    constructor() {
        this.musicRepository = new MusicRepository();
    }

    getMusics = async (getMusicDto) => {
        const result = this.musicRepository.getMusics();

        return result;
    };
}
module.exports = MusicService;
