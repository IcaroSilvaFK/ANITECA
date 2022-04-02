import { useRef, useEffect } from "react";

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
	const inputRef = useRef();

	return (
		<Container>
			<ResponsiveLogo>
				<Logo />
			</ResponsiveLogo>
			<Box>
				<Navigation />
				<ButtonLogin />
			</Box>
			<ContainerResponsive ref={inputRef} id="seila">
				<Search onClick={handleOpenSearch} />
				<MenuBurguer />
			</ContainerResponsive>
		</Container>
	);
}
