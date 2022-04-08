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

	background-color: var(--red600);

	position: relative;

	padding: 8px 4px 8px 14px;

	border-bottom-right-radius: 10px;
	border-top-right-radius: 10px;

	height: 40px;

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

	@media (max-width: 500px) {
		align-items: center;

		gap: 10px;
		width: 150%;
		border-radius: 0;
		position: relative;
		background-color: #171923;
		height: 80px;
		border-bottom-left-radius: 100px;
		border-top-left-radius: 100px;

		box-shadow: 0 0 5px var(--red600);

		img {
			width: 50px;
			position: absolute;

			left: 16px;
			border: 0;
		}

		font-size: 14px;
	}
`;
export const Profile = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	span {
		font-size: 12px;
		filter: brightness(0.8);
	}
	.email {
		display: none;

		@media (max-width: 500px) {
			display: block;
		}
	}
`;

export const Row = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 15px;

	.nameUser {
		font-size: 14px;
		color: #fff;
		filter: brightness(1);
		margin-left: 5px;
	}
	@media (max-width: 500px) {
		.nameUser {
			margin-left: 0;
		}
	}
`;

export const CloseIcon = styled(MdClose)`
	color: #fff;
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
