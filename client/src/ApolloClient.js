import { createHttpLink, ApolloClient, InMemoryCache } from "@apollo/client";

const link = createHttpLink({ uri: "http://localhost:5001" });

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
