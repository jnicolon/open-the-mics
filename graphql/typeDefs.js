const { gql } = require("apollo-server");

module.exports = gql`
  type Mic {
    id: ID!
    name: String!
    host: String!
    description: String!
    date: String!
    totalComedians: Int!
    comedians: [String]
  }

  type Query {
    getMics: [Mic]
    getMic(id: ID!): Mic
  }

  type Mutation {
    createMic(
      name: String!
      host: String!
      description: String!
      date: String!
      totalComedians: Int!
    ): Mic
    addComedian(micId: ID!, comedian: String!): Mic
    deleteComedian(micId: ID!, comedian: String!): Mic
  }
`;
