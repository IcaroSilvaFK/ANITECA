import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: "https://9d14-186-232-143-30.ngrok.io/graphql",
	cache: new InMemoryCache(),
});
