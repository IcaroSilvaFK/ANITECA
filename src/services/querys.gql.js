import { gql } from "@apollo/client";

export const GET_ALL_ANIMES = gql`
	query {
		getAllAnimes {
			title
			id
			imageUrl
			score
			airedDuration
		}
	}
`;
