const micResolvers = require("./micsResolvers");

module.exports = {
  Query: {
    ...micResolvers.Query,
  },
  Mutation: {
    ...micResolvers.Mutation,
  },
};
