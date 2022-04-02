import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const ButtonLog = styled.button`
	background-color: var(--red600);

	padding: 8px 15px;
	border-radius: 5px;
	font-size: 16px;
`;

export const ButtonLogged = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;

	background-color: var(--red600);

	position: relative;

	padding: 8px 4px 14px 8px;

	img {
		width: 40px;
		border-radius: 50px;
		position: absolute;

		left: -28px;
	}
`;

export const CloseIcon = styled(MdClose)`
	color: "#fff";
`;
