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

module.exports = { addTasks };
