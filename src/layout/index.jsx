import React from "react";

import { Header } from "../components/Header";

import { Container } from "./styles";

export function Layout({ children }) {
	return (
		<Container>
			<Header />
			<main>{children}</main>
		</Container>
	);
}
