import { useEffect, useState } from "react";
import {} from "@apollo/client";

import { ButtonLogin } from "../components/Buttons";

import { Container, ContainerForm, Form } from "./styles/home.style";

export default function _homePage() {
	return (
		<Container>
			<ButtonLogin />
		</Container>
	);
}
