const { gql } = require("apollo-server");

module.exports = gql`
  type Mic {
    id: ID!
    name: String!
    host: String!
    description: String!
    date: String!
    totalComedians: Int!
  }

  type Query {
    getMics: [Mic]
  }
`;
