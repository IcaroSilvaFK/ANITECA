import React, { useState, useEffect } from "react";
import Head from "next/head";

import { BiCommentCheck, BiRightArrow } from "react-icons/bi";
import { IoArrowRedo, IoMdArrowDropleft } from "react-icons/io";
import { TiArrowForward, TiArrowBack } from "react-icons/ti";
import { api } from "../../services/axios";
import { Layout } from "../../layout";
import { Card } from "../../components/Card";

import { Container, Title, ContainerMain } from "./styles";

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
	console.log(page);
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
								<button>
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
								key={element.id}
							/>
						))}
					</ContainerMain>
				</Container>
			</Layout>
		</>
	);
}
/**
 * image
 * title
 * score
 * */
