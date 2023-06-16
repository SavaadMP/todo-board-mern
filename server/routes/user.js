const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");
const {
  addTasks,
  getAllTodos,
  deleteTodo,
} = require("../controllers/todoController");

const requireAuth = require("../middlewares/requireAuth");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/alltodos", requireAuth, getAllTodos);
router.post("/addtodo", requireAuth, addTasks);
router.delete("/deleteTodo/:id", requireAuth, deleteTodo);

module.exports = router;
