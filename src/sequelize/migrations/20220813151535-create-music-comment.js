'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('MusicComments', {
            musicId: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            commentId: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('MusicComments');
    },
};
