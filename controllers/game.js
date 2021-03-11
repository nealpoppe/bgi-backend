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

module.exports = {
  getAllGames,
}
