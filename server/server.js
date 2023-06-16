require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// * ================ routes ====================
const userRouter = require("./routes/user");

// * ================ express ====================
const app = express();

// * ================ middlewares ====================
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 3300;

// * ================ db and server setup ====================
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`db and server connected successfully`);
    });
  })
  .catch((err) => console.log(err));
