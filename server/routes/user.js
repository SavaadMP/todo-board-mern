const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");
const { addTasks } = require("../controllers/todoController");

const requireAuth = require("../middlewares/requireAuth");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/addtodo", requireAuth, addTasks);

module.exports = router;
