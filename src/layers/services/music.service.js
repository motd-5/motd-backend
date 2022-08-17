const {
    PostMusicDto,
    GetMusicsDto,
    ConflictException,
    LikeMusicDto,
    NotFoundException,
} = require('../../models/_.loader');
const MusicRepository = require('../repositories/music.repository');
const MusicLikeRepository = require('../repositories/music.like.repository');

class MusicService {
    musicRepository;
    musicLikeRepository;
    // postMusicDto;

    constructor() {
        this.musicRepository = new MusicRepository();
        this.musicLikeRepository = new MusicLikeRepository();
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

    /** @param { LikeMusicDto } likeMusicDto @returns { Promise<{ isLikeUp: boolean }> } */
    toggleLike = async (likeMusicDto) => {
        try {
            const isExists = await this.musicRepository.isExistsMusicByMusicId(
                likeMusicDto.musicId,
            );
            if (!isExists) throw new NotFoundException('존재 하지 않는 음악 입니다.');

            const isLiked = await this.musicLikeRepository.isLikedMusicByLikeMusicDto(likeMusicDto);

            // 이미 좋아요가 있으면(isLiked === true) 좋아요를 취소 시킵니다.
            if (isLiked) return await this.musicLikeRepository.decreaseMusicLike(likeMusicDto);
            else return await this.musicLikeRepository.increaseMusicLike(likeMusicDto);
        } catch (err) {
            throw err;
        }
    };
}

module.exports = MusicService;
