import styled, { keyframes } from "styled-components";

const iconAnimation = keyframes`
	0%{
		transform: translateY(0)
	}
	50%{
		transform: translateY(-5px)
	}
	100%{
		transform: translateY(0)
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 100px;

	gap: 20px;
	position: absolute;
	top: 0%;
	left: 0;
	bottom: 0;
	right: 0;

	background-color: rgba(0, 0, 0, 0.4);
	.container {
		position: relative;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		background-color: #171923;

		padding: 30px 20px;
		border-radius: 10px;
		button {
			position: absolute;
			top: -10px;
			right: -10px;

			background-color: #e53e3e;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50px;

			transition: transform 0.2s;

			&:hover {
				transform: scale(1.1);
			}
		}
	}
	div {
		img {
			width: 250px;
			height: 250px;
			border-bottom-left-radius: 10px;
			border-top-left-radius: 10px;
		}
	}
`;

export const ContainerIcon = styled.div`
	background-color: #7085d6;
	width: 250px;
	height: 250px;

	display: flex;
	align-items: center;
	justify-content: center;

	border-bottom-right-radius: 10px;
	border-top-right-radius: 10px;

	svg {
		animation: ${iconAnimation} 2s linear infinite;
	}
`;

export const Box = styled.div`
	display: flex;
`;
