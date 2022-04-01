import { useEffect, useState } from "react";

import Head from "next/head";

import { Layout } from "../../layout";

export default function _searchPage() {
	const [animesFilter, setAnimesFilter] = useState([]);

	useEffect(() => {
		const animesList = localStorage.getItem("@searchAnimes");

		if (!!animesList) {
			setAnimesFilter(JSON.parse(animesList));
		}
	}, []);

	console.log(animesFilter);

	return (
		<>
			<Head></Head>
			<Layout></Layout>
		</>
	);
}
