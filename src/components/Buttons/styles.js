import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const ButtonLog = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 35px;

	background-color: var(--red600);

	width: 80px;
	height: 30px;
	border-radius: 5px;
	font-size: 16px;

	transform: scale 0.3s;

	&:hover {
		transform: scale(1.1);
	}
`;

export const ButtonLogged = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;

	background-color: var(--red600);

	position: relative;

	padding: 4px 4px 4px 14px;

	border-bottom-right-radius: 10px;
	border-top-right-radius: 10px;

	height: 30px;

	img {
		width: 40px;
		border-radius: 50px;
		position: absolute;

		left: -28px;
		border: 2px solid #fff;
	}

	transform: scale 0.3s;

	&:hover {
		transform: scale(1.1);
	}
`;

export const CloseIcon = styled(MdClose)`
	color: "#fff";
`;

export const SearchButton = styled.button`
	background-color: ${(props) =>
		props.color ? props.color : "var(--green400)"};

	width: 80px;
	border-radius: 5px;

	font-size: 16px;

	transition: transform 0.3s;

	&:hover {
		transform: scale(1.1);
	}
	@media (max-width: 500px) {
		padding: 8px 16px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const ButButton = styled.button`
	width: 100px;
	height: 40px;

	background-color: var(--red600);

	font-size: 18px;

	border-radius: 5px;

	display: flex;
	align-items: center;
	justify-content: center;

	transition: filter 0.3s;

	&:hover {
		filter: brightness(0.8);
	}
`;

export const SendButton = styled.button`
	width: 80px;
	background-color: var(--red600);

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 5px;

	transition: filter 0.3s;

	&:hover {
		filter: brightness(0.8);
	}

	@media (max-width: 500px) {
		height: 40px;
		width: 100px;

		font-size: 18px;
		display: flex;
		align-items: center;
	}
`;

export const ForgetButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
`;
