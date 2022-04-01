import Head from "next/head";

import { api } from "../../services/axios";

import { Layout } from "../../layout";
import { CardEpisode } from "../../components/CardEpisode";
import { BiLibrary } from "react-icons/bi";

import { Container, Box, ContainerEpisode } from "./styles";
//
export default function _animePage({ data, espisodesAnime }) {
	console.log(espisodesAnime);

	function handleGetVideo(id) {}

	return (
		<>
			<Head></Head>
			<Layout>
				<Container>
					<Box>
						<BiLibrary color="#c53030" size={30} />
						<h1>{data?.title}</h1>
					</Box>
					<ContainerEpisode>
						{espisodesAnime?.episodes.map((element) => (
							<CardEpisode
								key={element.mal_id}
								title={element.title}
								mal_id={element.mal_id}
								palyVideo={element.urkl}
							/>
						))}
					</ContainerEpisode>
				</Container>
			</Layout>
		</>
	);
}

export async function getServerSideProps(ctx) {
	const { id } = ctx.params;

	const response = await api.get(`anime/${id}`);
	const episodes = await api.get(`anime/${id}/videos`);

	if (response.status === 200) {
		const { data } = response.data;
		const espisodesAnime = episodes.data.data;

		return {
			props: { data, espisodesAnime },
		};
	}

	return {
		props: {},
	};
}
