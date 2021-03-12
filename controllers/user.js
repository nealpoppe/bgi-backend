const User = require('../models').User;
const Game = require('../models').Game;
const UserGame = require('../models').UserGame;

const getProfile = (req,res) => {
  User.findByPk(req.params.id, {
    include: [
      {
        model: Game,
        attributes: ['id', 'title', 'gameid']
      }
    ],
    attributes: ['id', 'username']
  })
  .then(userProfile => {
    Game.findAll()
    .then(allGames => {
      res.status(200).json(userProfile)
    })
    .catch(err => {
      res.status(500).send(`ERROR: ${err}`)
    })
  })
}


module.exports = {
  getProfile,
  // editProfile
}
