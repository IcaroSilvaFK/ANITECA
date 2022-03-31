import Head from "next/head";
import Image from "next/image";

import { Layout } from "../../layout";
import { Container } from "./styles";
export default function _errorPage() {
	return (
		<>
			<Head></Head>
			<Layout>
				<Container>
					<Image
						src="/assets/error.png"
						width={560}
						height={560}
						alt="Error Rocket"
					/>
				</Container>
			</Layout>
		</>
	);
}
