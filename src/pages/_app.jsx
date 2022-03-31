import { ToastContainer } from "react-toastify";

import { DiscordModalContextProvider } from "../context/modalDiscordContext";
import { GlobalStyle } from "../styles/global";
import "react-toastify/dist/ReactToastify.css";
import { DiscordModal } from "../Discord";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<DiscordModalContextProvider>
				<GlobalStyle />
				<Component {...pageProps} />
				<ToastContainer />
				<DiscordModal />
			</DiscordModalContextProvider>
		</>
	);
}

export default MyApp;
