import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import { ButtonLogin } from "../Buttons";
import { FormSearchHeader } from "../SearchHeader";

import { Container, Box } from "./styles";

import { MenuBurguer } from "../MenuBurguer";

export function Header() {
	return (
		<Container>
			<Logo />
			<Box>
				<Navigation />
				<ButtonLogin />
			</Box>
			<MenuBurguer />
		</Container>
	);
}

export function HeaderPrincipal() {
	return (
		<Container>
			<Box>
				<Logo />
				<FormSearchHeader />
			</Box>
			<Box>
				<Navigation />
				<ButtonLogin />
			</Box>
		</Container>
	);
}
