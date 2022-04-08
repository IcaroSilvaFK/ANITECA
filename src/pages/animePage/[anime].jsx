import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

import { BsFillPlayFill } from "react-icons/bs";

import { Header } from "../../components/Header";

import { Container, Box, Title, EpisodeContainer, BoxEpisode } from "./styles";

const GET_ANIME_BY_ID = gql`
	query animes($animeId: Float) {
		animes(animeId: $animeId) {
			imageUrl
			title
			id
			episodes {
				title
				id
			}
		}
	}
`;

export default function AnimePage() {
	const router = useRouter();
	const { anime } = router.query;
	console.log(anime);
	const { data } = useQuery(GET_ANIME_BY_ID, {
		variables: { animeId: parseInt(anime) },
	});
	console.log(data);
	return (
		<Container>
			<Header />
			{data?.animes.map((element) => (
				<Box key={element.id}>
					<Title>{element.title}</Title>
					<img src={element.imageUrl} alt={element.title} />
				</Box>
			))}
			<BoxEpisode>
				<h2>Episódios :</h2>
				{data?.animes.map((element) => {
					return element.episodes.map((element, index) => (
						<EpisodeContainer key={element.id}>
							<strong>
								<span>{index + 1}</span>
								{element.title}
							</strong>
							<BsFillPlayFill size={25} color="#E53E3E" />
						</EpisodeContainer>
					));
				})}
			</BoxEpisode>
		</Container>
	);
}
