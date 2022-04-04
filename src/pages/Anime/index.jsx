import { useForm, FormProvider } from "react-hook-form";

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
	ContainerButton,
} from "./styles";
export default function _animePage() {
	const props = useForm({
		defaultValues: {
			search: "",
		},
	});

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
				<Title>Luta :</Title>
				<Box>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
				</Box>
				<ContainerButton>
					<button>Mais</button>
				</ContainerButton>
			</ContainerSectionCards>
			<ContainerSectionCards>
				<Title>Romance :</Title>
				<Box>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
				</Box>
				<ContainerButton>
					<button>Mais</button>
				</ContainerButton>
			</ContainerSectionCards>
			<ContainerSectionCards>
				<Title>Ação :</Title>
				<Box>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F173266-anime_girls-original_characters-snow.jpg&f=1&nofb=1"
						name="Seila"
					/>
				</Box>
				<ContainerButton>
					<button>Mais</button>
				</ContainerButton>
			</ContainerSectionCards>
			<Footer />
		</Container>
	);
}
