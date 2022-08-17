'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Board extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Board.init(
        {
            boardId: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },

            userId: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },

            title: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            content: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        },
        {
            sequelize,
            modelName: 'Board',
        },
    );
    Board.associate = function (models) {
        Board.belongsTo(Model.User, {
            foreignKey: 'userId',
            targetKey: 'userId',
            onUpdate: 'cascade',
            onDelete: 'cascade',
        });
    };

    return Board;
};
