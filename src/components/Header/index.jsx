import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { SiDtube } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { SiMyanimelist } from "react-icons/si";

import { useModalDiscord } from "../../context/modalDiscordContext";

import { Container, Title, Form, Row } from "./styles";

import { api } from "../../services/axios";

export function Header() {
	const { register, handleSubmit, reset } = useForm();
	const { handleOpenModal } = useModalDiscord();

	async function getAnimes(anime) {
		const data = await api.get("anime", {
			params: {
				letter: anime,
			},
		});
		console.log(data);
	}

	function onSubmit(data) {
		getAnimes(data.search);
		reset();
	}

	return (
		<Container>
			<div>
				<Link href="/">
					<a>
						<SiDtube size={30} color="#E53E3E" />
						<Title>ANITECA</Title>
					</a>
				</Link>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Row>
						<input
							type="text"
							placeholder="Pesquise aqui seu anime favorito"
							{...register("search")}
						/>
						<button type="submit">
							<FiSearch size={20} />
						</button>
					</Row>
				</Form>
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
