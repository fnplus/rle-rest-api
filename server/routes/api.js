const express = require('express');

const router = express.Router();

const userController = require('../controllers/UserController');



/// USER Routes ///

router.get('/scores', userController.user_scores);

router.post('/user', userController.add_user);

router.post('/update/score', userController.update_user_score);

router.post('/reset',userController.reset_scores);

module.exports = router;