import { useForm, FormProvider } from "react-hook-form";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

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
	query animes {
		animes(genres: "fantasy", limit: 10) {
			imageUrl
			title
			id
			genres
		}
	}
`;

const GET_ANIME_ACTION = gql`
	query animes {
		animes(genres: "action", limit: 10) {
			imageUrl
			title
			id
			genres
		}
	}
`;

const GET_ANIME_ROMANCE = gql`
	query animes {
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

	const router = useRouter();

	const props = useForm({
		defaultValues: {
			search: "",
		},
	});

	function onSubmit(data) {
		console.log(data);
	}

	function handlePreviewAnime(id) {
		const pathNameTitleAnime = romance?.animes.filter(
			(element) => element.id === id
		);
		router.push(`/animePage/${id}`);
	}

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
							previewAnime={() => handlePreviewAnime(element.id)}
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
