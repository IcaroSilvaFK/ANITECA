import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import { ButtonLogin } from "../Buttons";
import { FormSearchHeader } from "../SearchHeader";

import {
	Container,
	Box,
	Search,
	ContainerResponsive,
	ResponsiveLogo,
} from "./styles";
import { useSearchMenu } from "../../context/searchMobile";
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
	const { handleOpenSearch } = useSearchMenu();

	return (
		<Container>
			<Box>
				<Logo />
				<FormSearchHeader />
			</Box>
			<ResponsiveLogo>
				<Logo />
				<FormSearchHeader />
			</ResponsiveLogo>
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
