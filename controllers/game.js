const Game = require('../models').Game;

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
}

module.exports = {
  getAllGames,
  addGame
}
