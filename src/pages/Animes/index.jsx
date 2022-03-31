import React, { useState, useEffect } from "react";
import Head from "next/head";

import { BiCommentCheck } from "react-icons/bi";

import { api } from "../../services/axios";
import { Layout } from "../../layout";

import { Container, Title } from "./styles";

export default function _animePage() {
	const [page, setPage] = useState(1);
	const [animes, setAnimes] = useState([]);
	// useEffect(() => {
	// 	(async () => {
	// 		const response = await api.get("top/anime", {
	// 			params: {
	// 				page,
	// 			},
	// 		});
	// 		if (response.status === 200) {
	// 			setAnimes(response.data.data);
	// 		}
	// 	})();
	// }, [page]);

	console.log(animes);

	return (
		<>
			<Head></Head>
			<Layout>
				<Container>
					<Title>
						<h1>
							<BiCommentCheck color="#c53030" />
							Animes Mais Pesquisados
						</h1>
					</Title>
				</Container>
			</Layout>
		</>
	);
}
