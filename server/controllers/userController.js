const getHome = (req, res) => {
  res.json({ message: "welcome to app!!" });
};

module.exports = { getHome };
