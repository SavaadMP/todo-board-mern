const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// * ================ generating auth token =======================
const generateAuthToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET_KEY, { expiresIn: "3d" });
};

const registerUser = async (req, res) => {
  // * ================ getting the datas from the user ================
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(username, email, password);
    // * ============== create token for the user =========================
    const token = generateAuthToken(user._id);
    res.status(200).json({ username, email, token });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { registerUser };
