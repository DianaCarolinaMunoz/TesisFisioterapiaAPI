const jwt = require('jsonwebtoken');
const secret = 'mysecretstotoken';

const withAuth = function(req, res, next) {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;
  if (!token) {
    res.status(401).send('Unauthorized: Falta No token');
  } else {
    console.log(token);
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalido token');
      } else {
        req.cedula = decoded.cedula;
        next();
      }
    });
  }
}

module.exports = withAuth;
