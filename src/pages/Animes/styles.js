import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 50px;

	width: 75%;

	border-bottom: 1px solid #c53030;

	margin: auto;

	div {
		display: flex;
		align-items: center;
		gap: 10px;
		button {
			width: 30px;
			height: 30px;
			background-color: red;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50px;
		}
	}

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
	flex-wrap: wrap;
	gap: 50px;
	max-width: 1000px;
	margin: 30px auto;
`;
