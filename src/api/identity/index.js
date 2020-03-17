const identityHook = require("./identityHook");
const { createIdentity } = require("./identityHandlers");

module.exports = fastify => {
  fastify.route({
    method: "GET",
    url: "/identity",
    preValidation: [identityHook],
    handler: ({ identity }, reply) => reply.send(identity)
  });

  fastify.route({
    method: "POST",
    url: "/identity",
    handler: createIdentity
  });
};
