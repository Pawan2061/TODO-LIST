const jwt = require("jsonwebtoken");

const jwtAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: err.message });
    }

    req.user = decodedToken;
    next();
  });
};

module.exports = jwtAuth;
