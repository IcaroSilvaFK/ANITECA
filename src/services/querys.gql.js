import { gql } from "@apollo/client";

export const GET_RANDON_ANIMES = gql`
		mal_id,
		title,
		score,
		images:{
			webp:{
				image_url
			}
		}
`;

export const GET_ALL_ANIMES = gql`
	mal_id,
	images:{
		webp:{
			image_url
		}
	},
	title,
	score
`;
