const { gql } = require("apollo-server");

module.exports = gql`
  type Mic {
    id: ID!
    micName: String!
    hostName: String!
    notes: String
    date: String!
    capacity: Int!
    comedians: [String]
    hostUrl: String!
    adress: String!
    city: String!
    postal: String!
    venue: String!
    payment: String!
  }

  type Query {
    getMics: [Mic]
    getMic(id: ID!): Mic
  }

  type Mutation {
    createMic(
      micName: String!
      hostName: String!
      notes: String!
      date: String!
      capacity: Int!
      comedians: [String]
      adress: String!
      city: String!
      postal: String!
      venue: String!
      payment: String!
    ): Mic
    deleteMic(micId: String!): Mic
    addComedian(micId: ID!, comedian: String!): Mic
    deleteComedian(micId: ID!, comedian: String!): Mic
  }
`;
