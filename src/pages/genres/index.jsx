import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";

import { CardGenres } from "../../components/CardGenres";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { client } from "../../config/apolloclient";

import { Container, SectionCards, SectionTitle, Title } from "./styles";

export default function Genres(data) {
  const [genres, setGenres] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const response = data?.data.animes.map((element) => element.genres);

    if (!!response) {
      const genres = response.reduce((prev, item) => prev.concat(item), []);

      const filteredGenres = new Set(genres);

      setGenres(Array.from(filteredGenres));
    }
  }, [data]);

  return (
    <Container>
      <Header />
      <SectionTitle>
        <Title>Gêneros</Title>
      </SectionTitle>
      <SectionCards>
        {genres?.map((element) => (
          <CardGenres
            genre={element.toUpperCase()}
            key={element}
            searchGenre={() => router.push(`/searchGenre/${element}`)}
          />
        ))}
      </SectionCards>
      <Footer />
    </Container>
  );
}

export async function getStaticProps(ctx) {
  const { data } = await client.query({
    query: gql`
      query animes {
        animes {
          genres
        }
      }
    `,
  });
  return {
    props: { data },
    revalidate: 60 * 60 * 96, // 4 days
  };
}
