import { useForm, FormProvider } from "react-hook-form";
import { IoIosText } from "react-icons/io";

import { Input } from "../Input";
import { ButtonForget } from "../Buttons";

import { Form, Row } from "./styles";

export function FormSearchHeader() {
	const props = useForm({
		defaultValues: {
			search: "",
		},
	});
	return (
		<FormProvider {...props}>
			<Form>
				<Row>
					<IoIosText color="#fff" />
					<Input
						name="search"
						type="text"
						placeholder="Pesquise aqui seu anime favorito"
					/>
					<ButtonForget />
				</Row>
			</Form>
		</FormProvider>
	);
}
