import { GrCircleAlert } from "react-icons/gr";

import { Container, Box } from "./styles";

export function CardAnime({ name, backgroundImage }) {
	return (
		<Box imageBackground={backgroundImage}>
			<strong>{name}</strong>
			<GrCircleAlert />
		</Box>
	);
}

// * imageBackground -> params
