/*  rest api with fastify framework */

//  connect postgreSQL with prisma
const { prisma } = require('@prisma/client')
const routes = require('./routes/Route')//call routes files
 
// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

//Declare a route
//  allow from browser with fastify cors
fastify.register(require("fastify-cors"), {
  origin: "*",
  methods: ["POST","GET"]
});

routes.forEach((route, index) => {
  fastify.route(route)
})
 
// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();
