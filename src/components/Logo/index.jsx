import Link from "next/link";
import { useRouter } from "next/router";
import { IoSearch } from "react-icons/io5";

import { useSearchMenu } from "../../context/searchMobile";

import { Container, Title, Icon } from "./styles";

export function Logo() {
	const { handleOpenSearch } = useSearchMenu();

	const router = useRouter();

	return (
		<Container>
			<Title>
				<Link href="/">
					<a>ANITECA</a>
				</Link>
			</Title>
			<Icon onClick={handleOpenSearch}>
				<IoSearch color="#fff" size={20} />
			</Icon>
		</Container>
	);
}
