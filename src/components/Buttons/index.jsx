import { useSession, signIn, signOut } from "next-auth/react";

import { ButtonLog, ButtonLogged, CloseIcon } from "./styles";

export function ButtonLogin() {
	const { data: session } = useSession();

	console.log(session);

	if (session) {
		return (
			<ButtonLogged onClick={() => signOut("google")}>
				<img src={session.user.image} alt={session.user.name} />
				<span>{session.user.name}</span>
				<CloseIcon size={20} color="#fff" />
			</ButtonLogged>
		);
	}
	return (
		<ButtonLog onClick={() => signIn("google")}>
			<span>login</span>
		</ButtonLog>
	);
}
