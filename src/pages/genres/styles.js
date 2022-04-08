import styled from "styled-components";

export const Container = styled.div``;

export const SectionTitle = styled.div`
	@media (max-width: 500px) {
		display: flex;
		align-items: center;
		justify-content: center;

		border-bottom: 1px solid var(--red600);

		padding: 10px;
	}
`;

export const Title = styled.h2``;

export const SectionCards = styled.section`
	display: grid;

	grid-template-columns: repeat(2, 1fr);

	gap: 15px;
	padding: 15px;
`;
