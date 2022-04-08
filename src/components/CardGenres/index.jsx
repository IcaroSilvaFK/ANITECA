import { Container } from "./styles";

export function CardGenres({ genre, searchGenre }) {
  return (
    <Container onClick={searchGenre} title={genre}>
      <strong>{genre}</strong>
    </Container>
  );
}
