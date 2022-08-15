const joi = require('joi');
const BaseDto = require('../base/base.dto');

class OneMusicsDto extends BaseDto {
    musicId;
    userId;
    title;
    artist;
    album;
    musicUrl;

    constructor({ musicId, userId, title, artist, album, musicValue }) {
        super();
        this.musicId = musicId;
        this.userId = userId;
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.musicValue = musicValue;
    }

    // Dto는 핊요한 요소들을 꺼내오는 자원
    getJoiInstance() {
        return {
            title: joi.string().required(),
            artist: joi.string().required(),
            album: joi.string().required(),
            musicValue: joi.string().required(),
        };
    }
}

module.exports = GetMusicsDto;
