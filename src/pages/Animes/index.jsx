import React, { useState, useEffect } from "react";
import Head from "next/head";

import { api } from "../../services/axios";
import { Layout } from "../../layout";

export default function _animePage() {
	const [page, setPage] = useState(1);
	const [animes, setAnimes] = useState([]);
	useEffect(() => {
		(async () => {
			const response = await api.get("top/anime", {
				params: {
					page,
				},
			});
			if (response.status === 200) {
				setAnimes(response.data.data);
			}
		})();
	}, [page]);

	console.log(animes);

	return (
		<>
			<Head></Head>
			<Layout></Layout>
		</>
	);
}
