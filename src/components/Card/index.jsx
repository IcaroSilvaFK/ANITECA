import {
	Container,
	Box,
	ContainerPalyer,
	ContainerAbsolute,
	Separator,
} from "./styles";

import { AiFillStar } from "react-icons/ai";

import { FaPlay } from "react-icons/fa";

export function Card({ image, title, score }) {
	return (
		<Container imageBackground={image}>
			<ContainerAbsolute>
				<ContainerPalyer>
					<FaPlay />
				</ContainerPalyer>
				<Box>
					<div>
						<strong>{title}</strong>
					</div>
					<div>
						<Separator />
						<span>{score}</span>
						<AiFillStar color="#FAF089" size={20} />
					</div>
				</Box>
			</ContainerAbsolute>
		</Container>
	);
}
