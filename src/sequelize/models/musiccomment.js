'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MusicComment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    MusicComment.init(
        {
            musicId: DataTypes.STRING,
            commentId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'MusicComment',
        },
    );
    MusicComment.associate = function (models) {
        MusicComment.belongsTo(models.Music, {
            foreignKey: 'musicId',
            targetKey: 'musicId',
            onDelete: 'cascade',
        }),
            MusicComment.belongsTo(models.Comment, {
                foreignKey: 'commentId',
                targetKey: 'commentId',
                onDelete: 'cascade',
            });
    };
    return MusicComment;
};
