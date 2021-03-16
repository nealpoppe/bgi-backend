const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/profile/:id', ctrl.user.getProfile);
router.post('/login', ctrl.user.login);
router.post('/signup', ctrl.user.signup);

module.exports = router;
