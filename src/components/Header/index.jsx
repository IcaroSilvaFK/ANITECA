import Link from "next/link";
import { Container } from "./styles";

export function Header() {
	return (
		<Container>
			<ul>
				<li>
					<Link href="">
						<a>Anime</a>
					</Link>
				</li>
				<li>
					<Link href="">
						<a>Gêneros</a>
					</Link>
				</li>
				<li>
					<Link href="">
						<a>Discord</a>
					</Link>
				</li>
			</ul>
		</Container>
	);
}
