import { ApolloProvider, useQuery, gql } from "@apollo/client";
import client from "./ApolloClient";

const getMics = gql`
  query {
    getMics {
      name
      id
      comedians
    }
  }
`;

function LoadData() {
  const { loading, error, data } = useQuery(getMics);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>`Error ${error}`</p>;

  return data.getMics.map((element) => {
    return <h3>{element.name}</h3>;
  });
}

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Hello from appollo</h1>
      <LoadData></LoadData>
    </ApolloProvider>
  );
}

export default App;
