'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MusicLike extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    MusicLike.init(
        {
            musicId: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'MusicLike',
        },
    );
    MusicLike.associate = function (models) {
        MusicLike.belongsTo(models.Music, {
            foreignKey: 'musicId', // MusicLike.musicId
            targetKey: 'musicId', // User.musicId
            onUpdate: 'cascade',
            onDelete: 'cascade',
        });
        MusicLike.belongsTo(models.User, {
            foreignKey: 'userId', // MusicLike.userId
            targetKey: 'userId', // User.userId
            onUpdate: 'cascade',
            onDelete: 'cascade',
        });
    };
    return MusicLike;
};
