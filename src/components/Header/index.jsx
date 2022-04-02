import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import { ButtonLogin } from "../Buttons";

import { Container, Box } from "./styles";

export function Header() {
	return (
		<Container>
			<Logo />
			<Box>
				<Navigation />
				<ButtonLogin />
			</Box>
		</Container>
	);
}
