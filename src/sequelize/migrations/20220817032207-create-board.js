'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Boards', {
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
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Boards');
    },
};
