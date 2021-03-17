const Game = require('../models').Game;
const UserGame = require('../models').UserGame;

const getAllGames = (req, res) => {
  Game.findAll()
  .then(games => {
    res.status(200).json(games)
  })
  .catch(err => {
    res.status(500).send(`ERROR: ${err}`);
  })
}

const addGame = (req,res) => {
  console.log("in addGame")
  console.log(req.body);
  const gameData = {
    title: req.body.title,
    gameid: req.body.gameid
  }
  Game.create(gameData)
  .then(createdGame => {
    const userData = {
      userId: req.body.userId,
      gameId: createdGame.id
    }
    UserGame.create(userData)
    .then(userGameCreated => {
      console.log(userGameCreated)
    })
    // console.log(createdGame)
  })
}

const deleteGame = (req,res) => {
  console.log("in deleteGame");
  console.log(req.body);
  UserGame.destroy({
    where: {
      userId: req.body.userId,
      gameId: req.body.gameId,
    }
  })
}

module.exports = {
  getAllGames,
  addGame,
  deleteGame
}
