var jwt = require("express-jwt");
const jwksClient = require("jwks-rsa");

const namespace = "http://localhost:3000/";

exports.checkJWT = jwt({
  secret: jwksClient.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: "https://dev-7dquad-l.eu.auth0.com/.well-known/jwks.json"
  }),
  audience: "tYIb04YfKB3NtYz5k4aCNyyULKNrINzN",
  issuer: "https://dev-7dquad-l.eu.auth0.com/",
  algorithms: ["RS256"]
});

exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && user[namespace + "role"] === role) {
    next();
  } else {
    return res.status(401).send({
      title: "Not Authorized",
      detail: "You are not authorized to access this data"
    });
  }
};
