'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Comment.init(
        {
            commentId: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            content: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'Comment',
        },
    );
    // https://wooooooak.github.io/node.js/2018/08/22/sequelize1%EB%8C%801/
    Comment.associate = function (models) {
        Comment.belongsTo(models.User, {
            foreignKey: 'userId', // comment.userId
            targetKey: 'userId', // user.userId
            onUpdate: 'cascade',
            onDelete: 'cascade',
        });
    };
    return Comment;
};
