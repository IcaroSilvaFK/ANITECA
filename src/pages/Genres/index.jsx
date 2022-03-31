import Head from "next/head";
import Link from "next/link";
import { MdAutoGraph } from "react-icons/md";

import { Layout } from "../../layout";

import { api } from "../../services/axios";

import { Box, Card, Title } from "./styles";

export default function _genresPage({ genres }) {
	const genresNames = genres.data.map((element) => element.name);
	const removeEquals = new Set(genresNames);
	const arrayGenresFinily = Array.from(removeEquals);
	console.log(arrayGenresFinily.length);
	return (
		<>
			<Head></Head>
			<Layout>
				<Title>
					<h1>
						<MdAutoGraph color="#F56565" size={40} />
						Genres
					</h1>
				</Title>
				<Box>
					{arrayGenresFinily.map((element) => (
						<Card key={element}>
							<Link href={`/AnimesGenres/${element}`}>
								<strong>{element}</strong>
							</Link>
						</Card>
					))}
				</Box>
			</Layout>
		</>
	);
}

export async function getStaticProps({ ctx }) {
	const response = await api.get("genres/anime", {
		params: {
			filter: "genres",
			limit: 20,
		},
	});

	if (response.status === 200) {
		const genres = response.data;
		return {
			props: { genres },
		};
	}

	return {
		props: {},
	};
}
