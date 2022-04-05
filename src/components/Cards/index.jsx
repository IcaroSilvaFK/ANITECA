import { FiAlertCircle } from "react-icons/fi";

import { Container, Box } from "./styles";

export function CardAnime({ name, backgroundImage }) {
	return (
		<Container imageBackground={backgroundImage}>
			<Box>
				<strong>{name}</strong>
				<FiAlertCircle color="#fff" size={20} />
			</Box>
		</Container>
	);
}

// * imageBackground -> params
