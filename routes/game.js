const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.game.getAllGames);
router.post('/games/:id', ctrl.game.addGame);

module.exports = router;
