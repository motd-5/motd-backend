const joi = require('joi');
const BaseDto = require('../base/base.dto');

class PostMusicsDto extends BaseDto {
    userId;
    title;
    artist;
    album;
    musicUrl;

    constructor({ userId, title, artist, album, musicUrl }) {
        super();
        this.userId = userId;
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.musicUrl = musicUrl;
    }

    getJoiInstance() {
        return {
            userId: joi.number().required(),
            title: joi.string().required(),
            artist: joi.string().required(),
            album: joi.string().required(),
            musicUrl: joi.string().required(),
        };
    }
}

module.exports = PostMusicsDto;
