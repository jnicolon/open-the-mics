import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MICS = gql`
  query getMics {
    getMics {
      id
      micName
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_MICS);

  console.log(data);

  return <div>This is the home page</div>;
}

export default Home;
