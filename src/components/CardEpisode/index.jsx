import { FaPlay } from "react-icons/fa";

import { Container, Number, Button, Box } from "./styles";

export function CardEpisode({ title, mal_id, palyVideo }) {
	return (
		<Container>
			<Number>{mal_id}</Number>
			<a href={palyVideo} target="_blank" rel="noreferrer">
				<FaPlay color="#E53E3E" size={20} />
			</a>
			<Box>
				<strong>{title}</strong>
			</Box>
		</Container>
	);
}
