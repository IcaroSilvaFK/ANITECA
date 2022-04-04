import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: "https://52ba-186-232-143-30.ngrok.io/graphql",
	cache: new InMemoryCache(),
});
