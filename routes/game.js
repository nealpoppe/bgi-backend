const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.game.getAllGames);
router.post('/:id', ctrl.game.addGame);
router.delete(('/:id', ctrl.game.deleteGame))

module.exports = router;
