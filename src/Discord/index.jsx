import Head from "next/head";

import { SiDiscord } from "react-icons/si";
import { MdClose } from "react-icons/md";
import { useModalDiscord } from "../context/modalDiscordContext";
import { Layout } from "../layout";

import { Container, ContainerIcon, Box } from "./styles";

export function DiscordModal() {
	const { modalIsOpen, handleCloseModal } = useModalDiscord();

	return modalIsOpen ? (
		<Container>
			<div className="container">
				<button onClick={handleCloseModal}>
					<MdClose size={25} />
				</button>
				<h1>Entre na nossa comunidade do discord</h1>
				<Box>
					<div>
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fqrcode.tec-it.com%2FAPI%2FQRCode%3Fdata%3DBEGIN%253aVEVENT%250aSUMMARY%253aMeine%2BVeranstaltung%250aDESCRIPTION%253aBeschreibung%250aLOCATION%253aVeranstaltungsort%250aDTSTART%253a20200304T022644Z%250aEND%253aVEVENT&f=1&nofb=1"
							alt="aaacac"
						/>
					</div>
					<ContainerIcon>
						<SiDiscord size={150} />
					</ContainerIcon>
				</Box>
			</div>
		</Container>
	) : (
		<></>
	);
}
