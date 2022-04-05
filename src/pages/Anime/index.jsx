import { useForm, FormProvider } from "react-hook-form";
import { useQuery, gql } from "@apollo/client";

import { FiSearch } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { ButtonSearch } from "../../components/Buttons";
import { CardAnime } from "../../components/Cards";
import { Footer } from "../../components/Footer";

import {
	Container,
	Box,
	Form,
	Row,
	ContainerSectionCards,
	Title,
	SectionButton,
} from "./styles";

const GET_ANIME_FANTASY = gql`
	query {
		animes(genres: "fantasy", limit: 10) {
			imageUrl
			title
			id
			genres
		}
	}
`;

const GET_ANIME_ACTION = gql`
	query {
		animes(genres: "action", limit: 10) {
			imageUrl
			title
			id
			genres
		}
	}
`;

const GET_ANIME_ROMANCE = gql`
	query {
		animes(genres: "action", limit: 10) {
			imageUrl
			title
			id
			genres
		}
	}
`;

export default function _animePage() {
	const { data: fantasy } = useQuery(GET_ANIME_FANTASY);
	const { data: action } = useQuery(GET_ANIME_ACTION);
	const { data: romance } = useQuery(GET_ANIME_ROMANCE);

	const props = useForm({
		defaultValues: {
			search: "",
		},
	});

	console.log(romance?.animes);

	function onSubmit(data) {}

	return (
		<Container>
			<Header />
			<FormProvider {...props}>
				<Form onSubmit={props.handleSubmit(onSubmit)}>
					<Row>
						<FiSearch color="#4A5568" size={25} />
						<Input
							name="search"
							placeholder="Pesquise aqui um anime"
							type="text"
						/>
					</Row>
					<ButtonSearch color="#E53E3E" />
				</Form>
			</FormProvider>
			<ContainerSectionCards>
				<Title>Romance :</Title>
				<Box>
					{romance?.animes.map((element) => (
						<CardAnime
							key={element.id}
							backgroundImage={element.imageUrl}
							name={element.title}
						/>
					))}
				</Box>
				<SectionButton>
					<button>Mais</button>
				</SectionButton>
			</ContainerSectionCards>
			<ContainerSectionCards>
				<Title>Action :</Title>
				<Box>
					{action?.animes.map((element) => (
						<CardAnime
							key={element.id}
							backgroundImage={element.imageUrl}
							name={element.title}
						/>
					))}
				</Box>
				<SectionButton>
					<button>Mais</button>
				</SectionButton>
			</ContainerSectionCards>
			<ContainerSectionCards>
				<Title>Fantasy :</Title>
				<Box>
					{fantasy?.animes.map((element) => (
						<CardAnime
							key={element.id}
							backgroundImage={element.imageUrl}
							name={element.title}
						/>
					))}
				</Box>
				<SectionButton>
					<button>Mais</button>
				</SectionButton>
			</ContainerSectionCards>
			<Footer />
		</Container>
	);
}
