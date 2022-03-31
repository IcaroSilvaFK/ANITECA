import React from "react";

import Link from "next/link";

import { SiDtube } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";

import { SiMyanimelist } from "react-icons/si";

import { useModalDiscord } from "../../context/modalDiscordContext";

import { Container, Title } from "./styles";

export function Header() {
	const { handleOpenModal } = useModalDiscord();

	return (
		<Container>
			<div>
				<Link href="/">
					<a>
						<SiDtube size={30} color="#E53E3E" />
						<Title>ANITECA</Title>
					</a>
				</Link>
			</div>
			<nav>
				<ul>
					<li>
						<Link href="/Animes">
							<a>
								Animes
								<SiMyanimelist size={23} color="#E53E3E" />
							</a>
						</Link>
					</li>
					<li>
						<Link href="/Genres">
							<a>
								Gêneros
								<MdAutoGraph size={23} color="#E53E3E" />
							</a>
						</Link>
					</li>
					<li>
						<button onClick={handleOpenModal}>
							<a>
								Discord
								<BsDiscord size={23} color="#6F85D5" />
							</a>
						</button>
					</li>
				</ul>
			</nav>
		</Container>
	);
}
