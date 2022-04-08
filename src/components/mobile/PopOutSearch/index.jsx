import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { useLazyQuery, gql, useQuery } from "@apollo/client";
import { toast } from "react-toastify";

import { useSearchMenu } from "../../../context/searchMobile";

import { Input } from "../../Input";

import { Container, Button, Box, Form } from "./styles";

const GET_ANIME_BY_NAME = gql`
	query Animes($title: String) {
		animes(title: $title) {
			imageUrl
			title
			id
		}
	}
`;

export function PopOutSearch() {
	const router = useRouter();

	const [animes, { data, loading, error }] = useLazyQuery(GET_ANIME_BY_NAME, {
		fetchPolicy: "network-only",
	});
	const props = useForm({
		defaultValues: {
			search: "",
		},
	});
	const { isOpenSearch, handleCloseSearch } = useSearchMenu();

	async function onSubmit({ search }) {
		await animes({ variables: { title: search } });

		if (!loading) {
			console.log(data);
			if (data?.animes.length > 0) {
				localStorage.setItem("@Search.Anime", JSON.stringify(data.animes));
				router.push(`/search/${search}`);
			}
		}

		props.reset();
		handleCloseSearch();
	}

	useEffect(
		() => {
			props.reset();
		},
		// eslint-disable-next-line
		[isOpenSearch]
	);

	return (
		<Container isOpen={isOpenSearch} onClick={handleCloseSearch}>
			<FormProvider {...props}>
				<Form onSubmit={props.handleSubmit(onSubmit)}>
					<Box onClick={(e) => e.stopPropagation()}>
						<Input name="search" type="text" placeholder="Search your anime" />
						<Button>
							<BiSearch color="#4A5568" size={20} />
						</Button>
					</Box>
				</Form>
			</FormProvider>
		</Container>
	);
}
