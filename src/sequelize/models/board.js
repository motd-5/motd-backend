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
                type: DataTypes.INTEGER,
            },

            userId: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },

            title: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            content: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'Board',
        },
    );
    Board.associate = function (models) {
        Board.belongsTo(models.User, {
            foreignKey: 'userId',
            targetKey: 'userId',
            onUpdate: 'cascade',
            onDelete: 'cascade',
        });
    };

    return Board;
};
