'use strict';
const { Model } = require('sequelize');

/**
 *
 * @param {*} sequelize
 * @param {*} DataTypes
 * @returns { User }
 */
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    // Error: Unknown column 'id' in 'field list'
    // https://stackoverflow.com/questions/60152711/why-doesnt-sequelize-cli-include-the-id-in-the-model-file
    User.init(
        {
            userId: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
            },
            email: {
                unique: true,
                type: DataTypes.STRING,
            },
            nickname: DataTypes.STRING,
            password: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'User',
        },
    );
    return User;
};
