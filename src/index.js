require("dotenv").config();

const fastify = require("fastify")({ logger: true });
const errorHandler = require("./util/errorHandler");
const identityRoutes = require("./api/identity");

fastify.addHook("onError", errorHandler);
identityRoutes(fastify);

fastify.listen(process.env.PORT, "0.0.0.0");
