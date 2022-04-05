import styled, { keyframes } from "styled-components";

const AnimatedIcon = keyframes`
	0%{
		transform: translateY(-10px)
	}
	50%{
		transform: translateY(0)
	}
	100%{
		transform: translateY(-10px)
	}
`;

export const Container = styled.div`
	position: absolute;

	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	background-color: rgba(0, 0, 0, 0.3);

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Box = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	background-color: #fff;
	color: #000;

	div + div {
		padding: 10px;
		font-size: 18px;
	}

	border-radius: 10px;
`;

export const ContainerIcon = styled.div`
	background-color: #7085d6;

	padding: 50px;

	border-top-left-radius: 10px;
	border-top-right-radius: 10px;

	svg {
		animation: ${AnimatedIcon} 2s linear infinite;
	}
`;
