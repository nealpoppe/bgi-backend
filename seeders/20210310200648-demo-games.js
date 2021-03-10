'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Games', [
      {
        title: "Wingspan",
        gameid: "5H5JS0KLzK"
      },
      {
        title: "Azul",
        gameid: "i5Oqu5VZgP"
      },
      {
        title: "Pandemic",
        gameid: "6FmFeux5xH"
      },
      {
        title: "Splendor",
        gameid: "O0G8z5Wgz1"
      },
      {
        title: "Patchwork",
        gameid: "9iBOPn3lES"
      },
      {
        title: "Brass: Birmingham",
        gameid: "3IPVIROfvl"
      },
      {
        title: "Gloomhaven",
        gameid: "RLlDWHh7hR"
      },
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
