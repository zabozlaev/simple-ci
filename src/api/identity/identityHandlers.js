const { signToken } = require("./identityService");

module.exports.createIdentity = async (request, reply) => {
  const { ip, headers } = request;
  const payload = {
    ip,
    headers
  };

  const token = await signToken(payload);

  return { token };
};
