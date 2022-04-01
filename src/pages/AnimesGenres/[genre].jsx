import Head from "next/head";

import { api } from "../../services/axios";

import { Layout } from "../../layout";

export default function _allEpisodesGenre({ data }) {
	console.log(data);
	return (
		<>
			<Head></Head>
			<Layout></Layout>
		</>
	);
}

export async function getServerSideProps(ctx) {
	const {
		params: { genre },
	} = ctx;
	console.log(genre);
	const response = await api.get("anime", {
		params: {
			genres: genre,
		},
	});
	console.log(response);

	if (response.status === 200) {
		const { data } = response.data;

		return {
			props: { data },
		};
	}
	return {
		props: {},
	};
}
