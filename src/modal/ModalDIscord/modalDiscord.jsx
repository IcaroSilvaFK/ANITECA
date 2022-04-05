import { useModal } from "../../context/modalDiscord";
import { FaDiscord } from "react-icons/fa";

import { Container, Box, ContainerIcon } from "./index";

export function ModalDiscord() {
	const { openModal } = useModal();

	if (openModal) {
		return (
			<Container>
				<Box>
					<ContainerIcon>
						<FaDiscord size={150} color="#fff" />
					</ContainerIcon>
					<div>
						<a
							href="https://discord.gg/HchNM3v4"
							target="_blank"
							rel="noreferrer"
						>
							Clique aqui
						</a>
					</div>
				</Box>
			</Container>
		);
	}

	return <></>;
}
