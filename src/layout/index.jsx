import { HeaderPrincipal } from "../components/Header";
import { Footer } from "../components/Footer";

export function Layout({ children }) {
	return (
		<>
			<HeaderPrincipal />
			{children}
			<Footer />
		</>
	);
}
