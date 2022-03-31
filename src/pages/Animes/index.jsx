import React from "react";
import Head from "next/head";

import { api } from "../../services/axios";
import { Layout } from "../../layout";

export default function AnimePage() {
	return (
		<>
			<Head></Head>
			<Layout></Layout>
		</>
	);
}

// export async function getStaticProps(ctx) {
// 	const response = await api.get("anime");
// 	if (response.status === 200) {
// 		const animes = response.data;
// 		return {
// 			props: { animes },
// 			reviladate: 60 * 60 * 24, //24 hours
// 		};
// 	}
// 	return {
// 		props: {},
// 		redirect: {
// 			destination: "/",
// 			permanent: false,
// 		},
// 	};
// }
