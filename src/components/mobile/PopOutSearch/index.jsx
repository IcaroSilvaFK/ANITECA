import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { BiSearch } from "react-icons/bi";

import { useSearchMenu } from "../../../context/searchMobile";

import { Input } from "../../Input";

import { Container, Button, Box, Form } from "./styles";

export function PopOutSearch() {
	const props = useForm({
		defaultValues: {
			search: "",
		},
	});
	const { isOpenSearch, handleCloseSearch } = useSearchMenu();

	function onSubmit(data) {
		console.log(data);

		props.reset();
		handleCloseSearch();
	}

	useEffect(() => {
		props.reset();
	}, [isOpenSearch]);

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
