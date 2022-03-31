import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.div`
	display: flex;
	padding: 20px 50px;

	width: 75%;

	border-bottom: 1px solid #c53030;

	margin: auto;

	h1 {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		font-family: var(--fontMont);
	}
`;

export const ContainerMain = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 1000px;
	margin: 30px auto;
`;
