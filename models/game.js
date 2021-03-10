'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.belongsToMany(models.User, {
        through: "UserGame",
        foreignKey: "gameId",
        otherKey: "userId"
      });
    }
  };
  Game.init({
    title: DataTypes.STRING,
    gameid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
