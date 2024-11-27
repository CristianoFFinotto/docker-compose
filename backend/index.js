import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (request, reply) => {
  return ["hello"];
});

/**
 * Run the server!
 */

const start = async () => {
  try {
    await fastify.listen({ host: process.env.HOST, port: process.env.PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
