const jwt = require('jsonwebtoken');

function signPayload(payload) {
  console.log(process.env.JWT_SECRET);
  return jwt.sign(payload, process.env.JWT_SECRET);
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = { signPayload, verifyToken };