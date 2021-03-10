'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserGames', [
      {
        userId: 1,
        gameId: 1,
        owned: true,
        plays: 17
      },
      {
        userId: 1,
        gameId: 2,
        owned: true,
        plays: 11
      },
      {
        userId: 1,
        gameId: 3,
        owned: true,
        plays: 8
      },
      {
        userId: 2,
        gameId: 2,
        owned: true,
        plays: 22
      },
      {
        userId: 2,
        gameId: 4,
        owned: true,
        plays: 20
      },
      {
        userId: 3,
        gameId: 6,
        owned: true,
        plays: 15
      },
      {
        userId: 3,
        gameId: 7,
        owned: true,
        plays: 8
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
