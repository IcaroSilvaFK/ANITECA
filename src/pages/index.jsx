import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { Container, ContainerForm, Form } from "./styles/home.style";

import { Layout } from "../layout";

export default function _homePage() {
	return (
		<>
			<Head></Head>
			<Layout>
				<Container>
					<article>
						<div>
							<h1>Assista Animes Gratuitamente sem anúncio!</h1>
						</div>
						<div>
							<Image
								src="/assets/imgHome.png"
								width={560}
								height={560}
								alt="Image Home"
								className="image"
							/>
						</div>
					</article>
					<ContainerForm>
						<div>
							<h3>Para receber as atualizações deixe seu email</h3>
						</div>
						<Form>
							<div>
								<MdOutlineAlternateEmail color="#A0AEC0" size={30} />
								<input type="email" placeholder="exemplo@exemplo.com" />
							</div>
							<button type="submit">
								<SiMinutemailer size={20} color="#ffff" />
								Enviar
							</button>
						</Form>
					</ContainerForm>
				</Container>
			</Layout>
		</>
	);
}
