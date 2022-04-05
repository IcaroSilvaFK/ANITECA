import { Container } from "./styles";
import { useRouter } from "next/router";
export function Logo() {
	const router = useRouter();

	return <Container onClick={() => router.push("/")}>ANITECA</Container>;
}
