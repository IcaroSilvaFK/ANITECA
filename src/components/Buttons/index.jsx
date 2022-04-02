import { useSession, signIn, signOut } from "next-auth/react";

import { HiOutlinePlusSm } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";

import {
	ButtonLog,
	ButtonLogged,
	CloseIcon,
	SearchButton,
	ButButton,
	SendButton,
	ForgetButton,
} from "./styles";

export function ButtonLogin() {
	const { data: session } = useSession();

	console.log(session);

	if (session) {
		return (
			<ButtonLogged onClick={() => signOut("google")}>
				<img src={session.user.image} alt={session.user.name} />
				<span>{session.user.name.split(" ")[0]}</span>
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

export function ButtonSearch({ color }) {
	return (
		<SearchButton color={color} type="submit">
			buscar
		</SearchButton>
	);
}

export function ButtonBut() {
	return (
		<ButButton>
			Mais <HiOutlinePlusSm size={20} />
		</ButButton>
	);
}

export function ButtonSend() {
	return (
		<SendButton type="submit">
			Enviar <IoIosSend size={20} />
		</SendButton>
	);
}

export function ButtonForget() {
	return (
		<ForgetButton>
			<BiSearchAlt2 color="#fff" size={20} />
		</ForgetButton>
	);
}
