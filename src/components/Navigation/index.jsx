import Link from "next/link";
import { useSession } from "next-auth/react";

import { Container, Button } from "./styles";
import { useModal } from "../../context/modalDiscord";

export function Navigation() {
	const { data: session } = useSession();
	const { toggleModal } = useModal();

	return (
		<Container>
			<ul>
				{!!session ? (
					<li>
						<Button quantity={10}>Favoritos</Button>
					</li>
				) : (
					<></>
				)}

				<li>
					<Link href="/Anime">
						<a>Anime</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Gêneros</a>
					</Link>
				</li>
				<li>
					<Button onClick={toggleModal}>Discord</Button>
				</li>
			</ul>
		</Container>
	);
}
