const { mongoose } = require("mongoose");
const Todo = require("../models/todoModel");

const addTasks = async (req, res) => {
  const { task } = req.body;

  try {
    const newTask = await Todo.create({
      userId: req.user.id,
      title: task,
      status: "upcoming",
    });

    res.status(200).json(newTask);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getAllTodos = async (req, res) => {
  const allTodos = await Todo.find({ userId: req.user.id }).sort({
    createdAt: -1,
  });

  res.status(200).json(allTodos);
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const todo = await Todo.findOneAndDelete({ _id: id });
  if (!todo) {
    res.status(404).json({ error: "Todo does not exist" });
  }

  res.status(200).json(todo);
};

module.exports = { addTasks, getAllTodos, deleteTodo };
