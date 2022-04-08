import { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import { HiOutlinePlusSm } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoExitOutline } from "react-icons/io5";
import {
	ButtonLog,
	ButtonLogged,
	SearchButton,
	ButButton,
	SendButton,
	ForgetButton,
	Profile,
	Column,
	Row,
} from "./styles";

export function ButtonLogin() {
	const { data: session, status } = useSession();

	function handleAddNewUSer() {
		signIn("google");
	}

	if (session) {
		// createUser({ variables: { email: session?.user.email } });

		return (
			<ButtonLogged onClick={() => signOut()}>
				<img src={session?.user.image} alt={session?.user.name} />
				<Profile>
					<Column>
						<Row>
							<span className="nameUser">
								{session?.user.name.split(" ")[0]}
							</span>
							<IoExitOutline size={20} color="#fff" />
						</Row>
						<span className="email">{session?.user.email}</span>
					</Column>
				</Profile>
			</ButtonLogged>
		);
	}
	return (
		<ButtonLog onClick={handleAddNewUSer}>
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

export function ButtonBut({ onClick }) {
	return (
		<ButButton onClick={onClick}>
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
