'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Music extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Music.init(
        {
            musicId: {
                allowNull: false,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            artist: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            album: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            musicUrl: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'Music',
        },
    );
    Music.associate = function (models) {
        // https://wooooooak.github.io/node.js/2018/11/22/sequelize-1-%EB%8C%80-%EB%8B%A4/
        Music.belongsTo(models.User, {
            foreignKey: 'userId', // comment.userId
            targetKey: 'userId', // user.userId
            onUpdate: 'cascade',
            onDelete: 'cascade',
        });
    };
    return Music;
};
