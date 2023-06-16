const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      required: true,
      default: "upcoming",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
