import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
`;

export const Form = styled.form`
	width: 100%;

	display: flex;
	justify-content: center;

	gap: 10px;

	margin-top: 20px;
`;

export const Row = styled.div`
	background-color: #fff;

	display: flex;
	align-items: center;

	border-radius: 5px;

	padding: 0 8px;

	input {
		width: 55vw;
		height: 40px;

		font-size: 18px;
		padding: 5px 10px;
	}
`;

export const ContainerSectionCards = styled.section`
	max-width: 1200px;
	margin: auto;
	display: flex;
	flex-direction: column;

	gap: 20px;

	margin-top: 30px;
`;

export const Box = styled.div`
	width: 100%;
	overflow-x: auto;

	padding: 5px;

	display: flex;
	justify-content: center;

	gap: 20px;

	&::-webkit-scrollbar {
		background-color: transparent;

		height: 8px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: var(--red600);

		border-radius: 10px;
	}
`;

export const Title = styled.h2``;
