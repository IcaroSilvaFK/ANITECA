import { gql, useQuery } from "@apollo/client";

import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CardAnime } from "../../components/Cards";

import { Container, SectionAnime, SectionTitle, Title, Box } from "./styles";

const GET_ALL_ANIMES = gql`
  query animes {
    animes {
      imageUrl
      title
      id
    }
  }
`;

export default function AllAnimes() {
  const { data, loading } = useQuery(GET_ALL_ANIMES);

  return (
    <Container>
      <Header />
      <SectionTitle>
        <Title>Lista de Animes</Title>
        <Box>
          <button>
            <IoArrowUndoSharp size={25} />
          </button>
          <button>
            <IoArrowRedoSharp size={25} />
          </button>
        </Box>
      </SectionTitle>
      <SectionAnime>
        {data?.animes.map((element) => (
          <CardAnime
            key={element.id}
            backgroundImage={element.imageUrl}
            name={element.title}
          />
        ))}
      </SectionAnime>
      <Box className="align-left">
        <button>
          <IoArrowUndoSharp size={25} />
        </button>
        <button>
          <IoArrowRedoSharp size={25} />
        </button>
      </Box>
      <Footer />
    </Container>
  );
}
