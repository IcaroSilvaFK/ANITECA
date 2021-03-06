import { RiCloseFill } from "react-icons/ri";

import { ButtonLogin } from "../../Buttons";
import { Navigation } from "../../Navigation";

import { useModalMobile } from "../../../context/menuMobile";

import { Box, Container, NavigationContainer, Close } from "./styles";

export function NavigationModal() {
	const { isOpenModal, handleCloseModal } = useModalMobile();
	return (
		<Container isAcitive={isOpenModal} onClick={handleCloseModal}>
			<Box>
				<NavigationContainer onClick={(e) => e.stopPropagation()}>
					<Close onClick={handleCloseModal}>
						<RiCloseFill size={30} />
					</Close>
					<ButtonLogin />
					<Navigation />
				</NavigationContainer>
			</Box>
		</Container>
	);
}
