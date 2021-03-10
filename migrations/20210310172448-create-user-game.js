'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserGames', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      gameId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      owned: {
        type: Sequelize.BOOLEAN
      },
      plays: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    },
    {
      uniqueKeys: {
        actions_unique: {
          fields: ['userId','gameId']
        }
      }
    }
  );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserGames');
  }
};
