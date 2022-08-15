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
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            userId: DataTypes.INTEGER,
            content: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
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
