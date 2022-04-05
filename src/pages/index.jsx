import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";

import { ImSearch } from "react-icons/im";
import { MdOutlineAlternateEmail } from "react-icons/md";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { ButtonSearch, ButtonBut, ButtonSend } from "../components/Buttons";
import { Footer } from "../components/Footer";

import { useQuery } from "@apollo/client";
import { GET_ALL_ANIMES } from "../services/querys.gql";

import {
	Container,
	Box,
	Form,
	Row,
	SectionCards,
	CardsSection,
	NewsSection,
} from "./styles/home.style";

export default function _homePage() {
	// const { loading, error, data } = useQuery(GET_ALL_ANIMES);

	const props = useForm({
		defaultValues: {
			search: "",
		},
	});
	const emailProps = useForm({
		defaultValues: {
			email: "",
		},
	});
	function onSubmit(data) {
		props.reset();
	}
	function registerFormHandler(data) {
		console.log(data);

		props.reset();
	}

	return (
		<Container>
			<Header />
			<Box>
				<div className="box__containerTitle">
					<h1>
						<span>Assita Animes</span>
						<span>Gratuitamente sem anúncio!</span>
					</h1>
					<div>
						<Image
							src="/assets/Logo-main.png"
							width={300}
							height={300}
							alt="imagem Anime"
						/>
					</div>
				</div>
				<FormProvider {...props}>
					<Form onSubmit={props.handleSubmit(onSubmit)}>
						<Row>
							<ImSearch color="#718096" />
							<Input
								name="search"
								placeholder="Pesquise aqui seu anime"
								type="text"
							/>
						</Row>
						<ButtonSearch color="#E53E3E" />
					</Form>
				</FormProvider>
			</Box>
			<SectionCards>
				<div>
					<h2>Animes mais vistos</h2>
				</div>
				<CardsSection>
					<img
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fptanime.com%2Fwp-content%2Fuploads%2F2019%2F10%2FNaruto-Manga-Volume-66-artigo-capa-revelada-ptAnime.jpg&f=1&nofb=1"
						alt=""
					/>
					<img
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fja3faz6jsrn31.jpg&f=1&nofb=1"
						alt=""
					/>
					<img
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff8%2Ffe%2F60%2Ff8fe60874cac2b5ee26806aba11fd6cc.jpg&f=1&nofb=1"
						alt=""
					/>
				</CardsSection>
				<div className="containerBut">
					<ButtonBut />
				</div>
			</SectionCards>
			<NewsSection>
				<div className="newsSection__title">
					<h1>
						Nossa <span>Newsletter</span>
					</h1>
					<p>
						Participe da nossa newsletter para receber noosa atualização semanal
						de novos animes!
					</p>
				</div>
				<FormProvider {...emailProps}>
					<Form onSubmit={emailProps.handleSubmit(registerFormHandler)}>
						<Row>
							<MdOutlineAlternateEmail color="#718096" size={25} />
							<Input
								name="email"
								type="email"
								placeholder="Digite aqui seu Email!"
							/>
						</Row>
						<ButtonSend />
					</Form>
				</FormProvider>
			</NewsSection>
			<Footer />
		</Container>
	);
}
