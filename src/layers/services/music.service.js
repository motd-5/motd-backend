const { PostMusicDto, GetMusicsDto, ConflictException } = require('../../models/_.loader');
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

    /** @param { GetMusicsDto } getMusicDto @return { string }*/
    getMusics = async (getMusicDto) => {
        const result = await this.musicRepository.getMusics(getMusicDto);

        return result;
    };

    /** @param { number } musicId @return { string }*/
    getOneMusic = async (musicId) => {
        return await this.musicRepository.getOneMusic(musicId);
    };
}

module.exports = MusicService;
