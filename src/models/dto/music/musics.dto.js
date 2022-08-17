const joi = require('joi');
const BaseDto = require('../base/base.dto');

class MusicDto extends BaseDto {
    userId;
    musicId;
    title;
    artist;
    album;
    musicUrl;

    constructor({ userId, musicId, title, artist, album, musicUrl }) {
        super();

        this.userId = userId;
        this.musicId = musicId;
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.musicUrl = musicUrl;
    }

    getJoiInstance() {
        return {
            userId: joi.number().required(),
            musicId: joi.number().required(),
            title: joi.string().required(),
            artist: joi.string().required(),
            album: joi.string().required(),
            musicUrl: joi.string().required(),
        };
    }
}

module.exports = MusicDto;
