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
	SectionButton,
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
				<Title>Romance :</Title>
				<Box>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
				</Box>
				<SectionButton>
					<button>Mais</button>
				</SectionButton>
			</ContainerSectionCards>
			<ContainerSectionCards>
				<Title>Seila :</Title>
				<Box>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
				</Box>
				<SectionButton>
					<button>Mais</button>
				</SectionButton>
			</ContainerSectionCards>
			<ContainerSectionCards>
				<Title>Ação :</Title>
				<Box>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="Lorem lorem lorem lorem"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
					<CardAnime
						backgroundImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F9b%2F1f%2F249b1f13aea8e3cded45831a0df12600--romance-anime-romances.jpg&f=1&nofb=1"
						name="seila"
					/>
				</Box>
				<SectionButton>
					<button>Mais</button>
				</SectionButton>
			</ContainerSectionCards>
			<Footer />
		</Container>
	);
}
