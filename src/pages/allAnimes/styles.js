import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
`;

export const SectionAnime = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	padding: 10px;

	flex-wrap: wrap;

	gap: 20px;
`;

export const SectionTitle = styled.section`
	width: 100%;
`;

export const Title = styled.h2``;

export const Box = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;

	gap: 20px;

	margin-top: 10px;

	&.align-left {
		justify-content: flex-start;
		margin-left: 10px;
	}

	button {
		width: 40px;
		height: 40px;
		background-color: var(--red600);

		border-radius: 50px;
	}

	button + button {
		margin-right: 20px;
	}
`;
