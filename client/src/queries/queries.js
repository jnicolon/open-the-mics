import { gql } from "@apollo/client";

const ADD_MIC = gql`
  mutation createMic(
    $micName: String!
    $hostName: String!
    $notes: String!
    $date: String!
    $capacity: Int
    $adress: String!
    $city: String!
    $postal: String!
    $venue: String!
    $payment: String!
  ) {
    createMic(
      micName: $micName
      hostName: $hostName
      notes: $notes
      date: $date
      capacity: $capacity
      adress: $adress
      city: $city
      postal: $postal
      venue: $venue
      payment: $payment
    ) {
      micName
      hostUrl
      id
    }
  }
`;

export { ADD_MIC };
