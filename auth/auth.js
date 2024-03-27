const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.cookies.token
  // const header = req.headers["authorization"];
  // const token = header && header.split(" ")[1];
    if (token === undefined || token === null) return res.status(404).json({ error: "token null" });
    try {
      const decoded = jwt.verify(token, `${process.env.JWT_TOKEN}`)
      req.user = decoded
      next()
    } catch (error) {
      console.log(error)
      return res.status(404).json({ msg: "Session is over. Please login again", status: false })
    }
};

module.exports = { auth }