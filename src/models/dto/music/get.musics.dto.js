const joi = require('joi');
const BaseDto = require('../base/base.dto');

class GetMusicsDto extends BaseDto {
    title;
    artist;
    album;
    musicUrl;

    constructor({ title, artist, album, musicUrl }) {
        super();
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.musicUrl = musicUrl;
    }

    getJoiInstance() {
        return {
            title: joi.string().required(),
            artist: joi.string().required(),
            album: joi.string().required(),
            musicUrl: joi.string().required(),
        };
    }
}

module.exports = GetMusicsDto;
