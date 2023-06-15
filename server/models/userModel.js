const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      required: true,
      type: String,
    },

    email: {
      required: true,
      type: String,
      unique: true,
    },

    password: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

// * ================== Static signup method ===================
userSchema.statics.signup = async function (username, email, password) {
  // * ================= Validating forms ===================
  if ((!username, !email, !password)) {
    throw Error("All fields must be entered!!");
  }

  if (!validator.isEmail(email)) {
    throw Error("Enter a valid email!!");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password should be strong!!");
  }

  //   * ================= Checking entered email is already registered ================
  const existEmail = await this.findOne({ email });
  if (existEmail) throw Error("Email already registered!!");

  //   * ==================== Change the entired password to hashed password ==================
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //   * ===================== Adding the user to database ==============================
  const user = await this.create({
    username,
    email,
    password: hashedPassword,
  });

  return user;
};

module.exports = mongoose.model("User", userSchema);
