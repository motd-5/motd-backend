const joi = require('joi');
const BaseDto = require('../base/base.dto');

class PostMusicsDto extends BaseDto {
    title;
    artist;
    album;
    musicUrl;

    constructor({ title, artist, album, musicValue }) {
        super();
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.musicUrl = this.musicUrl;
    }

    getJoiInstance() {
        return {
            title: joi.string().required(),
            artist: joi.string().required(),
            album: joi.string().required(),
            musicValue: joi.string().required(),
        };
    }
}

module.exports = PostMusicsDto;
