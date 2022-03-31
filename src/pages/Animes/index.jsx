import React, { useState, useEffect } from "react";
import Head from "next/head";

import { BiCommentCheck } from "react-icons/bi";

import { api } from "../../services/axios";
import { Layout } from "../../layout";
import { Card } from "../../components/Card";

import { Container, Title, ContainerMain } from "./styles";

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
					<ContainerMain>
						<Card
							image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-ZucXNLFNrvI%2FV2crTZVCUEI%2FAAAAAAAAfPk%2FUfSmMIuZ9mMbmK7C3nREZZ8ADpuLG5CjQCLcB%2Fs1600%2Ftoradora_27.jpg&f=1&nofb=1"
							title="Taradora"
							score="7.5"
						/>
					</ContainerMain>
				</Container>
			</Layout>
		</>
	);
}
