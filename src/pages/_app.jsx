import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";

import { client } from "../services/apolloclient";
import { Seo } from "../SEO";

import { DiscordModalContextProvider } from "../context/modalDiscordContext";
import { GlobalStyle } from "../styles/global";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<>
			<Seo />
			<ApolloProvider client={client}>
				<SessionProvider session={session}>
					<GlobalStyle />
					<Component {...pageProps} />
					<ToastContainer />
				</SessionProvider>
			</ApolloProvider>
		</>
	);
}

export default MyApp;
