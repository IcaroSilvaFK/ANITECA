import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CardAnime } from "../../components/Cards";

import { Container, ContainerFlex } from "./styles";

const GET_BY_GENRE = gql`
	query animes($genres: [String!]) {
		animes(genres: $genres) {
			title
			score
			id
			imageUrl
		}
	}
`;

export default function SearchGenre() {
	const router = useRouter();
	const { genre } = router.query;
	const { data, loading } = useQuery(GET_BY_GENRE, {
		variables: { genres: genre },
	});

	return (
		<Container>
			<Header />
			<ContainerFlex>
				{data?.animes.map((element) => (
					<CardAnime
						key={element.id}
						name={element.title}
						backgroundImage={element.imageUrl}
					/>
				))}
			</ContainerFlex>
			<Footer />
		</Container>
	);
}
