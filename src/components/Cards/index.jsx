import { AiOutlineExclamationCircle } from "react-icons/ai";

import { Container, Box } from "./styles";

export function CardAnime({ name, backgroundImage }) {
	return (
		<Container imageBackground={backgroundImage}>
			<Box>
				<strong>{name}</strong>
				<AiOutlineExclamationCircle color="#fff" size={20} />
			</Box>
		</Container>
	);
}

// * imageBackground -> params
