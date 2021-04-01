const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers/index.js");
const { MONGODB } = require("./config.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connected");
    server.listen({ port: 5000 }).then((res) => {
      console.log(`Server running at ${res.url}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
