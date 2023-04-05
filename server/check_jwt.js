const jwt = require('jsonwebtoken');
const config = require("./jwt_conf");

function vaildToken(req, res, next) { 
  try {
    const token = req.header("jwt-token");
    const decoded = jwt.verify(token, config.jwt.secret);
    console.log("decoded token 🏀", token);
    next()
  } catch (err) { 
    return res.send(401).json({
      message: "invaild token"
    })
  }
}