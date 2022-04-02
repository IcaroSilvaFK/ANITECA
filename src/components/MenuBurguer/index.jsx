import { AiOutlineMenuFold } from "react-icons/ai";

import { Container } from "./styles";

import { useModalMobile } from "../../context/menuMobile";

export function MenuBurguer() {
	const { handleOpenModal } = useModalMobile();
	return (
		<Container onClick={handleOpenModal}>
			<AiOutlineMenuFold size={25} color="#fff" />
		</Container>
	);
}
