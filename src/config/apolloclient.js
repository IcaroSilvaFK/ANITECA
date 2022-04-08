import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://d7bc-186-232-143-30.ngrok.io/graphql",
  cache: new InMemoryCache(),
});
