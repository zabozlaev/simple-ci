const { verify } = require("./identityService");

module.exports = async (request, _, done) => {
  const { authorization } = request.headers;
  const token = authorization && authorization.split("Bearer ")[1];
  if (!token) {
    throw new HttpError(httpStatusCodes.UNAUTHORIZED);
  }

  const result = await verify(token);
  request.identity = result;
  return done();
};
