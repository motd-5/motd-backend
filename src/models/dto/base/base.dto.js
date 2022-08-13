class BaseDto {
    getJoiInstnace() {
        throw new Error('BaseDto 자식 클래스의 getJoiInstance 는 재정의 되어야 합니다.');
    }
}

module.exports = BaseDto;
