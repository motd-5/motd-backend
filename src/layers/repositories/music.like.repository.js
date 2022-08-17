const { LikeMusicDto, ConflictException, NotFoundException } = require('../../models/_.loader');
const { Music, MusicLike } = require('../../sequelize/models');
const BaseRepository = require('./base.repository');

class MusicLikeRepository extends BaseRepository {
    constructor() {
        super();
    }

    /** @param { LikeMusicDto } likeMusicDto @returns { Promies<boolean>} */
    isLikedMusicByLikeMusicDto = async (likeMusicDto) => {
        try {
            const findResult = await MusicLike.findOne({
                where: {
                    userId: likeMusicDto.userId,
                    musicId: likeMusicDto.musicId,
                },
            });

            if (findResult === null) return false;
            else return true;
        } catch (err) {
            throw this.exeptionHandler(err);
        }
    };

    /**
     * Model.create 메서드는 생성할 대상의 고유값(UNIQUE) 가 이미 있으면 에러가 납니다.
     * Model.create 메서드는 생성할 대상이 없을 경우에는 생성 후 Sequelize 모델 전용 객체를 반환합니다.
     *
     * 에러가 나지 않았을 경우에는 반드시 try {} 안에서 성공했음을 의미하기에 { isLiked: up } 을 사용합니다.
     * 에러가 났을 경우에는 에러 값의 err.original.code 가 'ER_DUP_ENTTRY' 인 경우를 확인하고 그렇다면 좋아요가 반영 되었음을 알립니다.
     *
     * @param { LikeMusicDto } likeMusicDto @returns { Promise<{ isLikeUp: false }>} */
    increaseMusicLike = async (likeMusicDto) => {
        try {
            const result = await MusicLike.create({
                userId: likeMusicDto.userId,
                musicId: likeMusicDto.musicId,
            });
            // result.dataValues
            return {
                isLikeUp: true,
            };
        } catch (err) {
            // 또는 err?.origin?.errno 1062 일 떄, ...
            if (err?.original?.code === 'ER_DUP_ENTRY')
                throw new ConflictException(`이미 좋아요가 반영되어 있습니다.`);
            else throw this.exeptionHandler(err);
        }
    };

    /**
     * Model.destory 메서드는 삭제할 대상이 없어도 에러가 나지 않습니다.
     * Model.destory 메서드는 삭제할 대상이 없을 경우 `0` 있을 경우 `삭제한 숫자` 를 반환합니다.
     *
     * result 가 0 인 경우에는 에러를 삭제할 좋아요를 찾지 못했다는 404 에러와 함께 반환 해줍니다.
     * result 가 0 이 아닌 경우에는 해당하는 모든 친구를 삭제하고 false 를 줍니다.
     *
     * @param { LikeMusicDto } likeMusicDto @returns { Promise<{ isLikeUp: false }> } */
    decreaseMusicLike = async (likeMusicDto) => {
        try {
            const result = await MusicLike.destroy({
                where: {
                    musicId: likeMusicDto.musicId,
                    userId: likeMusicDto.userId,
                },
            });
            if (result === 0) throw new NotFoundException('이미 좋아요가 취소되어 있습니다.');
            else
                return {
                    isLikeUp: false,
                };
        } catch (err) {
            throw this.exeptionHandler(err);
        }
    };
}

module.exports = MusicLikeRepository;
