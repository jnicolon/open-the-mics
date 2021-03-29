const { gql } = require("apollo-server");

module.exports = gql`
  type Mic {
    id: ID!
    name: String!
    host: String!
  }

  type Query {
    mics: [Mic]
    mic(id: ID!): Mic
  }
`;
