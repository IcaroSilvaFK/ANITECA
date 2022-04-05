import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";

import { ImSearch } from "react-icons/im";
import { MdEmojiEvents, MdOutlineAlternateEmail } from "react-icons/md";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { ButtonSearch, ButtonBut, ButtonSend } from "../components/Buttons";
import { Footer } from "../components/Footer";

import { useQuery, gql } from "@apollo/client";

import {
	Container,
	Box,
	Form,
	Row,
	SectionCards,
	CardsSection,
	NewsSection,
} from "./styles/home.style";

const ImageQuery = gql`
	query {
		animes(limit: 3) {
			imageUrl
			id
		}
	}
`;

export default function _homePage() {
	// const { loading, error, data } = useQuery(GET_ALL_ANIMES);
	const { data } = useQuery(ImageQuery);

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

	console.log(data);

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
					{data?.animes.map((element) => (
						<img src={element.imageUrl} alt="" key={element.id} />
					))}
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
						Participe da nossa newsletter para receber nossa atualização semanal
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
