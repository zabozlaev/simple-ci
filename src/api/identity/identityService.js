const httpStatusCodes = require("http-status-codes");
const jsonwebtoken = require("jsonwebtoken");
const HttpError = require("../../util/error");

const { JWT_SECRET } = process.env;

module.exports.signToken = payload =>
  new Promise((resolve, reject) =>
    jsonwebtoken.sign(
      payload,
      JWT_SECRET,
      { expiresIn: "1000h" },
      (err, encoded) => (err ? reject(err) : resolve(encoded))
    )
  );

module.exports.verify = token =>
  new Promise((resolve, reject) =>
    jsonwebtoken.verify(token, JWT_SECRET, {}, (err, decoded) =>
      err
        ? reject(
            new HttpError(
              httpStatusCodes.UNPROCESSABLE_ENTITY,
              "Incorrect token"
            )
          )
        : resolve(decoded)
    )
  );
