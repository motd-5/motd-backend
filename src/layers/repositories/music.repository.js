class MusicRepository {
    // repository는 mongoose의 findbyid와 비슷 (id 기준으로 단일 문서 조회)
    constructor() {}

    postMusics = () => {
        return 'hello';
    };

    getMusics = () => {
        return 'happy';
    };

    getOneMusic = () => {
        console.log('왜 안 되니?');
        return 'smile';
    };
}

module.exports = MusicRepository;
