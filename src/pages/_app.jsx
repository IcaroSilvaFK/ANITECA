import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";

import { client } from "../config/apolloclient";
import { Seo } from "../SEO";
import { MenuMobileContextProvider } from "../context/menuMobile";
import { NavigationModal } from "../components/mobile/NavigationMobile";
import { SearchMobileContextProvider } from "../context/searchMobile";
import { PopOutSearch } from "../components/mobile/PopOutSearch";

import { GlobalStyle } from "../styles/global";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<>
			<Seo />
			<ApolloProvider client={client}>
				<SessionProvider session={session}>
					<MenuMobileContextProvider>
						<SearchMobileContextProvider>
							<GlobalStyle />
							<Component {...pageProps} />
							<ToastContainer />
							<PopOutSearch />
							<NavigationModal />
						</SearchMobileContextProvider>
					</MenuMobileContextProvider>
				</SessionProvider>
			</ApolloProvider>
		</>
	);
}

export default MyApp;
