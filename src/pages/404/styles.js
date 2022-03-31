import styled, { keyframes } from "styled-components";

const imageAnimate = keyframes`
	0%{
		transform: translateY(0)
	}
	50%{
		transform: translateY(-10px);
	}
	100%{
		transform: translateY(0)
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	max-width: 1000px;

	margin: auto;

	img {
		animation: ${imageAnimate} 2s ease-in-out infinite reverse;
	}
`;
