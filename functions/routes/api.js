const express = require("express");

const router = express.Router();

const userController = require("../controllers/UserController");

router.get("/scores", userController.user_scores);

router.post("/user", userController.add_user);

router.post("/users", userController.add_users);

router.post("/update/score", userController.update_user_score);

router.post("/reset", userController.reset_scores);

router.post("/activities", userController.add_activity_statement);

module.exports = router;
