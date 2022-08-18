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
            musicId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            commentId: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'MusicComment',
        },
    );
    MusicComment.associate = function (models) {
        MusicComment.belongsTo(models.Music, {
            foreignKey: 'musicId',
            targetKey: 'musicId',
            onUpdate: 'cascade',
            onDelete: 'cascade',
        }),
            MusicComment.belongsTo(models.Comment, {
                foreignKey: 'commentId',
                targetKey: 'commentId',
                onUpdate: 'cascade',
                onDelete: 'cascade',
            });
    };
    return MusicComment;
};
