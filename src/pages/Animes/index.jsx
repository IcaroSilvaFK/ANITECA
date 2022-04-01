import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { BiCommentCheck } from "react-icons/bi";
import { TiArrowForward, TiArrowBack } from "react-icons/ti";
import { api } from "../../services/axios";
import { Layout } from "../../layout";
import { Card } from "../../components/Card";

import { Container, Title, ContainerMain } from "./styles";

export default function _animePage() {
	const [page, setPage] = useState(1);
	const [animes, setAnimes] = useState([]);
	const router = useRouter();

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

	function handleSearchAnime(id) {
		router.push(`/Anime/${id}`);
	}

	function handleRevertPage() {
		if (page > 1) setPage(page - 1);
	}
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
						<div>
							{page > 1 ? (
								<button onClick={handleRevertPage}>
									<TiArrowBack size={25} />
								</button>
							) : (
								""
							)}
							<button onClick={() => setPage((prev) => prev + 1)}>
								<TiArrowForward size={25} />
							</button>
						</div>
					</Title>
					<ContainerMain>
						{animes?.map((element) => (
							<Card
								title={element.title}
								score={element.score}
								image={element.images.webp.image_url}
								key={element.mal_id}
								enjoyAnime={() => handleSearchAnime(element.mal_id)}
							/>
						))}
					</ContainerMain>
				</Container>
			</Layout>
		</>
	);
}
