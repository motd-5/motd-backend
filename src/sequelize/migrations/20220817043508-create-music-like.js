'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('MusicLikes', {
            musicId: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('MusicLikes');
    },
};
