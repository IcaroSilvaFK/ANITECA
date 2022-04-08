import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import { ButtonLogin } from "../Buttons";

import { Container, Box, Search, ContainerResponsive } from "./styles";
import { useSearchMenu } from "../../context/searchMobile";
import { MenuBurguer } from "../MenuBurguer";

export function Header() {
	const { handleOpenSearch } = useSearchMenu();
	return (
		<Container>
			<Logo />
			<Box>
				<Navigation />
				<ButtonLogin />
			</Box>
			<ContainerResponsive>
				<Search onClick={handleOpenSearch} />
				<MenuBurguer />
			</ContainerResponsive>
		</Container>
	);
}
